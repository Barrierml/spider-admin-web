import { find } from "lodash"

export default function Card(props) {
    return (
        <div className="block bg-white rounded shadow">
            <div className="h-12 px-5 flex flex-row items-center justify-between">
                <h2 className="text-2xl font-medium">{props.title}</h2>
            </div>
            <div className="p-3">
                {props.children}
            </div>
        </div>
    )
}