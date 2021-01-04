import React from "react";
import tw from "twin.macro" //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import {Link} from "react-router-dom"
import SidebarOption from "./SidebarOption"

const Sidebar = () => {
    return (
        <div tw=" flex items-center w-1/5" >
            <div tw="flex w-full h-full max-w-xs p-4 bg-gray-900 border-r border-gray-200">
                <ul tw="flex flex-col w-full  ">
                    <div tw="flex justify-center items-center font-black border-b-0 text-2xl! ml-0! mt-5 mb-10">
                        <Link to="/" tw="font-body text-gray-100">
                            PlayMore
                        </Link>
                    </div>
                    <SidebarOption
                        linkTo="/dashboard"
                        iconPath="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        optionName="Dashboard"
                    />
                    <SidebarOption
                        linkTo="/licenses"
                        iconPath="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                        optionName="Licenses"
                    />
                    <SidebarOption
                        linkTo="/"
                        iconPath="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        optionName="Account"
                    />
                    <button tw=" px-8 py-2 rounded-lg shadow font-body bg-gray-100 text-gray-900 font-bold text-lg hover:bg-gray-400 p-2 mt-80 " >
                        <a  href="/api/signout"> Sign Out </a>
                    </button>   
                </ul>
            </div>
        </div>
        
    )
}
export default Sidebar
