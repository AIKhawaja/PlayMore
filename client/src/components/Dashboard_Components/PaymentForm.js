import React, { useState, useEffect } from "react"
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader"
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-lines
import {Link } from "react-router-dom"
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = ({ items, close }) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const fetchPaymentIntent = async () => {
        const res = await axios.post("/api/create_payment_intent", {
            items
        })
        setClientSecret(res.data.clientSecret)
    }

    const handleChange = async (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "")
    };

    const handeSumbit = async () => {
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        })
        console.log(payload)

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };

    const renderButton = () => {
        if (processing === true) {
            return (
                <button
                    disabled
                    tw="focus:outline-none mb-4 py-3 bg-black  rounded-md ">
                    <div tw="flex items-center  justify-center flex-row">
                        <ClipLoader
                            size={20}
                            color={"white"}
                        />
                        <p tw=" text-lg place-self-center font-body text-white  ml-4 ">Processing Payment</p>
                    </div>
                </button>
            )
        }
        else if (succeeded === true) {
            return (
                <>
                <button
                    disabled
                    tw="focus:outline-none mb-4 py-3 bg-black  rounded-md ">
                    <div tw="flex items-center justify-center flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            width="24" 
                            height="24"
                             viewBox="0 0 24 24">
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z" />
                        </svg>
                    </div>
                </button>
                <p tw=" text-green-700 font-body font-semibold place-self-center">Thank you for your Payment</p>
                <p tw=" text-green-700 font-body font-semibold place-self-center"><Link tw = "underline" to ="/licenses">Click here</Link> to view your licenses</p>
                </>
            )
        }

        else {
            return (
                < button
                    disabled={processing || disabled || succeeded}
                    onClick={handeSumbit}
                    tw="focus:outline-none  mb-4 py-3 bg-black hover:bg-gray-900 rounded-md " >
                    <div tw="flex items-center  justify-center flex-row">
                        <p tw=" text-lg place-self-center font-body text-white  ml-4 ">Checkout</p>
                    </div>
                </button >
            )
        }
    }

    useEffect(() => {
        fetchPaymentIntent()
    }, [])

    return (
        <div tw="flex flex-col items-center py-6 space-y-3">
            <span tw="text-2xl font-body font-semibold text-gray-900 mb-4">Complete your Payment</span>
            <div tw="w-3/4 flex flex-col">
                <CardElement tw=" rounded bg-white border-gray-300 px-4 py-4" options={cardStyle} onChange={handleChange} />
                {renderButton()}
                <p tw=" text-primary-500 font-body font-semibold place-self-center">{error}</p>
            </div>
        </div>
    )
}
const cardStyle = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#white"
            }
        },
        invalid: {
            color: "#AB2927",
            iconColor: "#AB2927"
        }
    }
};

export default PaymentForm


