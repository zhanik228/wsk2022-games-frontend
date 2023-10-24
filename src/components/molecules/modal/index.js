import { useState } from "react"

const Modal = (props) => {
    const {
        isOpen,
        close,
        submit,
        children
    } = props

    return (
        <>
        {isOpen && 
            <div
            className="
            position-absolute
            top-0
            right-0
            left-0
            bottom-0
            d-flex
            align-items-center
            justify-content-center
            bg-dark
            w-100
            "
        >
            <div
                className="
                w-25
                bg-white
                text-center
                p-2
                "
            >
                {children}
                <div
                    className="
                    d-flex
                    justify-content-between
                    "
                >
                    <button
                        className="
                        btn
                        btn-danger
                        "
                        onClick={() => close()}
                    >
                        Close
                    </button>
                    <button
                        className="
                        btn
                        btn-success
                        "
                        onClick={() => submit()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default Modal