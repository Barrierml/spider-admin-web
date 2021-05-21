import { useState } from "react"
import { connect } from "react-redux";
import { wsGet } from "../ws/ws";
import Dialog from "./dialog"
import Load from "./loading"
import Setting from "./setting";
import Logger from "./logger"
import moment from "moment";
function Li(props) {
    let { status, title, last_run, next_run } = props;
    let [show, setShow] = useState(false);
    let [load, setLoad] = useState(false);
    let [showLog, setLog] = useState(false);

    async function openSpider() {
        await wsGet("open_spider", title);
        setLoad(false);
    }

    async function stopSpider() {
        await wsGet("stop_spider", title);
        setLoad(false);
    }


    last_run = last_run && moment(last_run).format("YYYY-MM-DD HH:mm:ss")
    next_run = next_run && moment(next_run).format("YYYY-MM-DD HH:mm:ss")

    return (<div className=" relative hover:bg-light-blue-500 transition  hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
        <Load show={load}></Load>
        <dl className="sm:block xl:block  items-center">
            <div className=" relative lg:mb-0 xl:mb-4">

                <dd className="group-hover:text-white leading-6 font-medium text-lg text-black">{title}</dd>
                <div className="absolute sm:right-0 sm:top-0 lg:right-6 lg:top-5 xl:right-0 xl:top-0">
                    <div className={"bg-yellow-500 rounded p-1 m-1 text-white text-sm"}>最后运行：{last_run || "无"}</div>
                    <div className={"bg-blue-500 rounded p-1  m-1 text-white text-sm"}>下次运行：{next_run || "无"}</div>
                </div>
            </div>
            <div className="flex items-center lg:mb-0 xl:mb-4 space-x-2">
                <dd className={`rounded-full shadow ${status === "运行中" ? 'bg-green-400' : 'bg-red-500'} h-5 w-5`}></dd>
                <dd className="group-hover:text-light-blue-200  text-base text-gray-700  font-medium">{status}</dd>
            </div>
            <div className="mt-2 col-start-2 row-start-1 row-end-3 flex space-x-2 flex-row">
                <button disabled={status === "运行中" ? true : false} onClick={() => { setLoad(true); openSpider() }} className="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">运行</button>
                <button disabled={status === "运行中" ? false : true} onClick={() => { setLoad(true); stopSpider() }} className="hover:bg-red-200 hover:text-red-800 group flex items-center rounded-md bg-red-100 text-red-600 text-sm font-medium px-4 py-2">停止</button>
                <button onClick={() => { setShow(true) }} className="hover:bg-green-200 hover:text-green-800 group flex items-center rounded-md bg-green-100 text-green-600 text-sm font-medium px-4 py-2">配置</button>
            </div>
            <div className="mt-2 col-start-3 row-span-2 flex items-center justify-between">
                <span className=" flex-shrink truncate text-gray-600 group-hover:text-white">
                    {props.lastInfor?.data}
                </span>
                <button onClick={() => { setLog(true) }} className="ml-2 flex-shrink-0 text-sm font-medium transition-colors duration-200 ring-2 p-1 ring-current outline-none rounded-md text-violet-600 group-hover:text-gray-100">查看全部日志</button>
            </div>
        </dl>
        <Dialog
            closeText="关闭日志"
            okText={"清除日志"}
            onConfrim={props.clearLog}
            title={title + "的日志"}
            show={showLog}
            onClose={() => { setLog(false) }}>
            <Logger name={title}></Logger>
        </Dialog>
        <Setting name={title} title={title + " 修改配置"} show={show} onClose={() => { setShow(false) }}></Setting>
    </div>)
}

function stateToProps(state, props) {
    //最后的日志展示
    let logList = state.logger["log_" + props.title];
    let status = state.status["status_" + props.title];
    let lastInfor = "";
    if (logList && logList.length > 0) {
        lastInfor = logList[0];
    }
    status = status ? "运行中" : "已停止";
    //运行状态的改变
    return { lastInfor, status }
}

function dispatchToProps(dispatch, props) {
    return {
        clearLog: () => dispatch({ type: "log_clear", name: props.title })
    }
}


export default connect(stateToProps, dispatchToProps)(Li)