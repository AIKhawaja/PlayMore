import React from "react"
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

const AnalyticsCard = ({ number, description, imagePath, color }) => {

    switch (color) {
        case "blue":
            return (
                <div tw="col-span-4">
                    <div tw="flex flex-row bg-white shadow-sm rounded p-4">
                        <div tw={"flex items-center justify-center flex-shrink-0 h-16 w-16 rounded-xl bg-blue-100 text-blue-500"}>
                            <svg
                                tw="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={imagePath}
                                ></path>
                            </svg>
                        </div>
                        <div tw="flex flex-col flex-grow ml-4">
                            <div tw={"font-bold text-blue-600 text-3xl"}>{number}</div>
                            <div tw="text-sm font-bold text-gray-700">{description}</div>
                        </div>
                    </div>
                </div>
            )
        case "orange": return (
            <div tw="col-span-4">
                <div tw="flex flex-row bg-white shadow-sm rounded p-4">
                    <div tw={"flex items-center justify-center flex-shrink-0 h-16 w-16 rounded-xl bg-orange-100 text-orange-500"}>
                        <svg
                            tw="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={imagePath}
                            ></path>
                        </svg>
                    </div>
                    <div tw="flex flex-col flex-grow ml-4">
                        <div tw={"font-bold text-orange-600 text-3xl"}>{number}</div>
                        <div tw="text-sm font-bold text-gray-700">{description}</div>
                    </div>
                </div>
            </div>
        )
        default: return (
            <div tw="col-span-4">
                <div tw="flex flex-row bg-white shadow-sm rounded p-4">
                    <div tw={"flex items-center justify-center flex-shrink-0 h-16 w-16 rounded-xl bg-green-100 text-green-500"}>
                        <svg
                            tw="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={imagePath}
                            ></path>
                        </svg>
                    </div>
                    <div tw="flex flex-col flex-grow ml-4">
                        <div tw={"font-bold text-green-600 text-3xl"}>{number}</div>
                        <div tw="text-sm font-bold text-gray-700">{description}</div>
                    </div>
                </div>
            </div>
        )
    }

}

export default AnalyticsCard