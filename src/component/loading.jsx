import { Transition } from "@headlessui/react";

export default function loading(props) {
    let show = props.show;
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
            <div className="absolute flex items-center flex-col justify-center z-10 top-0 left-0 right-0 bottom-0 bg-gray-200">
                <div className="border-black rounded-full w-8 h-8 border-t-2 animate-spin">
                </div>
                <div>
                    {props.msg}
                </div>
            </div>
        </Transition>
    )
}