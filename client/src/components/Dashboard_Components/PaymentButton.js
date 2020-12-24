import React, { useState } from "react"
import PaymentModal from "./PaymentModal"
import tw from "twin.macro" //eslint-disable-line
import { css } from "styled-components/macro";//eslint-disable-line

const PaymentButton = () => {

    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }

    const renderContent = () => {
        switch (modalOpen) {
            case true:
                console.log("true")
                return <PaymentModal close={closeModal} />
            default:
                return
        }
    }


    return (
        <div >
            {renderContent()}
            <button onClick={openModal} tw="  focus:outline-none ml-128 rounded-full py-2 px-6 shadow font-body bg-black text-white font-medium text-lg hover:bg-black p-2 mt-4">
                <span tw=" px-16 text-center font-body font-semibold text-white ">Checkout</span>
            </button>
        </div>
    )
}



export default PaymentButton

