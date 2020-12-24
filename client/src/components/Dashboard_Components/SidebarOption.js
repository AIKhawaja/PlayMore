import React from "react";
import tw from "twin.macro" //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { Link } from "react-router-dom";

const SidebarOption = ({ linkTo, iconPath, optionName }) => {
    return <li>
        < Link to={linkTo}
            tw="flex flex-row items-center h-12 px-4 mb-3 rounded-lg text-white hover:bg-gray-700 active:bg-red-100">
            <span tw="flex items-center justify-center text-lg text-white">
                <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" tw="h-6 w-6">
                    <path d={iconPath}></path>
                </svg>
            </span>
            <span tw="ml-3 text-gray-300 font-medium  font-body">{optionName}</span>
        </Link>
    </li>
}

export default SidebarOption