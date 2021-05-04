import Li from "./splierLi"
import react from "react"
import { connect } from "react-redux"
class List extends react.Component {
    render() {
        let _render = null;
        if (this.props?.list && this.props?.list.length > 0) {
            _render =
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                    {this.props.list.map((e) =>
                        <li><Li key={e.name} title={e.name} status={e.status} rate={e.rate}></Li></li>
                    )}
                </ul>
        }
        else {
            _render = <div className={"w-full h-40 flex justify-center items-center text-xl"}>指定目录下无爬虫文件</div>;
        }
        return (_render)
    }
}


const stateToProps = (state) => {
    return {
        list: state.list,
    }
}

export default connect(stateToProps)(List)