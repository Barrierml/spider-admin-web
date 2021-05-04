import Header from "./component/header"
import Card from "./component/card"
import SplierList from "./component/splier"
import react from "react"
import { Provider } from "react-redux"
import store from './store/store'
import wsInit from "./ws/ws.js"

wsInit();

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
