import { reverse } from "lodash";
import moment from "moment";
import { connect } from "react-redux";


export function Msg(props) {
    let color = "green"
    switch (props.data.level) {
        case "error":
            color = "red"
            break;
        case "warn":
            color = "yellow"
            break;
        case "mark":
            color = "gray"
            break;
        case "debug":
            color = "blue"
            break;
        default:
            break;
    }
    let time = moment(props.data.time).format("YYYY-MM-DD HH:mm:ss")
    return <li className={`p-1 rounded whitespace-pre-wrap transition border text-lg font-medium leading-normal hover:text-white my-1 hover:bg-${color}-400 text-${color}-400 border-${color}-400`} >
        {`[${time}][${props.data.level}]-${props.data.data}`}
    </li>
}

function Logger(props) {
    let res;
    if (props.list && props.list.length > 0) {
        res = reverse(props.list).map((e) =>
            <Msg key={e.time} data={e}></Msg>
        )
    }
    else {
        res = <div className={"w-full h-40 flex justify-center items-center text-xl"}>当前无日志</div>
    }
    return (<ul className={"w-screen max-w-3xl overflow-y-auto px-5"} style={{ maxHeight: "40vh" }}>
        {res}
    </ul>)
}


function stateToProps(state, props) {
    return {
        list: state.logger["log_" + props.name],
    }
}

export default connect(stateToProps)(Logger)