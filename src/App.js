import Header from "./component/header"
import Card from "./component/card"
import SplierList from "./component/splier"
import react from "react"
import { Provider } from "react-redux"
import store, { loadLog } from './store/store'
import wsInit, { wsGet } from "./ws/ws.js"

let ws = wsInit();

function storeUpdateList(list) {
  if (list?.length && list.length > 0) {
    return {
      type: "list_update",
      list,
    }
  }
}



ws.onopen = async function () {
  //初始化列表数据
  let list = await wsGet("list")
  //初始化日志
  list?.forEach(async e => {
    let log = await wsGet("log", e.name);
    store.dispatch(loadLog(e.name, log))
  });
  store.dispatch(storeUpdateList(list));
}

export default class App extends react.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="h-screen w-screen flex flex-col">
          <Header></Header>
          <div className="py-3 px-5 flex flex-col h-full bg-gray-100 border-gray-200">
            <Card title="爬虫池">
              <SplierList></SplierList>
            </Card>
          </div>
        </div>
      </Provider>
    )
  }
}
