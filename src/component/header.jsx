
export default function header() {
    return (<header className="h-20 border-b-2 px-20 flex items-center shadow">
        <div className="text-blue-600 text-2xl font-semibold select-none">爬虫管理</div>
        <div className="flex flex-row mx-20 space-x-10  text-gray-500 text-lg">
            <div className="cursor-pointer hover:text-black px-4 py-1 transition border-b-2 border-blue-600">爬虫</div>
            <div className="cursor-pointer hover:text-black px-4 py-1 transition border-b-2 hover:border-blue-600">配置</div>
            <div className="cursor-pointer hover:text-black px-4 py-1 transition border-b-2 hover:border-blue-600">关于</div>
        </div>
    </header>)
}