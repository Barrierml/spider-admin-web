import Li from "./splierLi"
export default function List(props) {
    return (<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        <li>
            <Li title="天下第一" status="运行中" rate="每小时运行"></Li>
        </li>
    </ul>)
}