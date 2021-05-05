export default function loading(props) {
    let show = props.show;
    return (
        <div className="absolute flex items-center flex-col justify-center z-10 top-0 left-0 right-0 bottom-0 bg-gray-200" style={{ display: show ? "" : "none" }}>
            <div className="border-black rounded-full w-8 h-8 border-t-2 animate-spin">
            </div>
            <div>
                {props.msg}
            </div>
        </div>
    )
}