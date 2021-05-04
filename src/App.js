import { Fragment, useRef, useEffect, useState } from "react";

import Header from "./component/header"
import Card from "./component/card"
import SplierList from "./component/splier"

export default function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header></Header>
      <div className="py-3 px-5 flex flex-col h-full bg-gray-100 border-gray-200">
        <Card title="爬虫池">
          <SplierList></SplierList>
        </Card>
      </div>
    </div>
  )
}
