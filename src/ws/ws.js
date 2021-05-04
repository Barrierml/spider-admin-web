import store from "../store/store"

window.store = store;
//更新列表

function storeUpdateList(list) {
  if (list?.length && list.length > 0) {
    return {
      type: "list_update",
      list,
    }
  }
}
function send(msg) {
  window.ws.send(JSON.stringify(msg))
}
function updateList() {
  send({ type: "get", msg: "list" })
}


function init() {
  const ws = window.ws = new WebSocket("ws://localhost:4000/spider");
  ws.onmessage = function (data) {
    console.log(data.data);
    data = JSON.parse(data.data);
    const { type, msg } = data;
    switch (type) {
      case "list":
        return store.dispatch(storeUpdateList(msg));
      case "connected":
        //已连接
        updateList();
        return;
    }
  }
}

export default init;