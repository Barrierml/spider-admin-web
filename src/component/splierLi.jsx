import { useState } from "react"
import { connect } from "react-redux";
import Dialog from "./dialog"
import Load from "./loading"

function Li(props) {
    const { status, title, id, rate } = props;
    let [show, setShow] = useState(false);
    let [load, setLoad] = useState(false);
    let [showLog, setLog] = useState(false);

    return (<div className=" relative hover:bg-light-blue-500 transition  hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
        <Load show={load}></Load>
        <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
            <div className=" relative sm:mb-4 lg:mb-0 xl:mb-4">
                <dd className="group-hover:text-white leading-6 font-medium text-black">{title}</dd>
                <div class="absolute sm:right-0 sm:top-0 lg:right-6 lg:top-5 xl:right-0 xl:top-0 bg-blue-600 rounded p-1 text-white text-sm">{rate}</div>
            </div>
            <div className="flex items-center sm:mb-4 lg:mb-0 xl:mb-4 space-x-2">
                <dd className={`rounded-full ${status === "运行中" ? 'bg-green-400' : 'bg-red-500'} h-4 w-4`}></dd>
                <dd className="group-hover:text-light-blue-200 text-gray-700 text-sm font-medium">{status}</dd>
            </div>
            <div className="mt-2 col-start-2 row-start-1 row-end-3 flex space-x-2 flex-row">
                <button onClick={props.add} className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">运行</button>
                <button className="hover:bg-red-200 hover:text-red-800 group flex items-center rounded-md bg-red-100 text-red-600 text-sm font-medium px-4 py-2">停止</button>
                <button onClick={() => { setShow(true) }} className="hover:bg-green-200 hover:text-green-800 group flex items-center rounded-md bg-green-100 text-green-600 text-sm font-medium px-4 py-2">配置</button>
            </div>
            <div className="mt-2 col-start-3 row-span-2 flex items-center justify-between">
                <span className=" flex-shrink truncate text-gray-600 group-hover:text-white">{props.state}</span>
                <button onClick={() => { setLog(true) }} class="ml-2 flex-shrink-0 text-sm font-medium transition-colors duration-200 ring-2 p-1 ring-current outline-none rounded-md text-violet-600 group-hover:text-gray-100">查看全部日志</button>
            </div>
        </dl>
        <Dialog title={title + "日志"} show={showLog} onClose={() => { setLog(false) }}>
            啊哈哈哈
        </Dialog>
        <Dialog title={title + " 修改配置"} show={show} onClose={() => { setShow(false) }}>
            啊哈哈哈
        </Dialog>
    </div>)
}

export default Li