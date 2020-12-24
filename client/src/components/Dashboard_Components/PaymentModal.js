import React from "react"
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm"
import ReactDOM from "react-dom"

const stripePromise = loadStripe("pk_test_51H72NQLpdMyA6N9J8EawOE6KTh1v6aVR8zGlRwXiL5ryL7n1d1GXmjXNA3mJRGIkFAaS82StgeVcgcd0nnHimrj800iq515IeS")



const PaymentModal = ({ close }) => {

    return ReactDOM.createPortal(
        <div tw="fixed z-10 inset-0 overflow-y-auto">
            <div tw="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div tw="absolute inset-0 bg-gray-700 opacity-75"
                    onClick={() => close()}></div>
                <span tw="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
                <div tw="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div tw="bg-gray-400 rounded px-1 py-1">
                        <Elements stripe={stripePromise}>
                            <PaymentForm items ="Music" close ={close} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>

        , document.querySelector("#payment-modal")
    )
}

export default PaymentModal


