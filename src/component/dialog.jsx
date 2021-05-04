import { Transition } from "@headlessui/react";
export default function Dd(props) {
    let show = typeof props.show === "boolean" ? props.show : false;
    return (
        <Transition
            show={show}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div>
                <div onClick={() => { props.onClose && props.onClose() }} className="fixed inset-0 bg-black opacity-30"></div>
                <div className="fixed w-screen flex justify-center">
                    <div class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
                        <h3 class="text-lg font-medium leading-6 text-gray-900" id="headlessui-dialog-title-3">{props.title}</h3>
                        <div class="mt-2">
                            {props.children}
                        </div>
                        <div class=" justify-end mt-4 space-x-4 flex">
                            <button onClick={props.onConfrim} type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" tabindex="0">确定</button>
                            <button onClick={() => { props.onClose && props.onClose() }} type="button" class="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500" tabindex="0">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    );
}