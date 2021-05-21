import store, { addLog, changeStatus, update_list } from "../store/store"
import _ from "lodash"
window.store = store;


//保存回调list
const queue = [];
//异步等待事件的id
let promise_id = 0;

function send(msg) {
  window.ws.send(JSON.stringify(msg));
}

export function wsGet(msg, parma) {
  return new Promise((resolve, rejcet) => {
    send({
      type: "get",
      id: promise_id,
      msg,
      parma
    })
    queue.push({
      id: promise_id++,
      resolve,
      rejcet,
    })
  })
}

window.wsGet = wsGet;


export async function wsSetSpider(name, setting) {
  return await wsGet("set_spider", { name, parma: setting });
}



//系统消息回执
function systemDispatch() {

}

//系统消息回执
function setDispatch(res) {
  const { type } = res;
  switch (type) {
    case "add_log":
      return store.dispatch(addLog(res.name, { ...res.data }));
    case "spider_close":
      return changeStatus(res.name, false);
    case "spider_open":
      update_list(res.name, { ...res.data })
      return changeStatus(res.name, true);
    case "update_spider":
      return update_list(res.name, { ...res.data })
    default:
      return
  }
}

//返回值
function backDispatch(id, res) {
  let index = _.findIndex(queue, (e) => { return e.id === id });
  if (index > -1) {
    const obj = queue.splice(index, 1)[0];
    obj.resolve(res);
  }
}



function dispatch(data) {
  data = JSON.parse(data.data);
  console.log("收到消息", data);
  const { type, res, id } = data;
  if (type === "system") {
    systemDispatch(res);
  }
  else if (type === "return") {
    backDispatch(id, res);
  }
  else if (type === "set") {
    setDispatch(res);
  }
}


function onclose(params) {
  console.log("服务器已断开");
}

function init() {
  const ws = window.ws = new WebSocket("ws://localhost:4000/spider");
  ws.onmessage = dispatch;
  ws.onclose = onclose;
  return ws;
}

export default init;