export default function Card(props) {
    return (

        <div class="block bg-white rounded shadow">
            <div class="h-12 px-5 flex flex-row items-center justify-between">
                <h2 class="text-2xl font-medium">{props.title}</h2>
            </div>
            <div class="p-3">
                {props.children}
            </div>
        </div>
    )
}