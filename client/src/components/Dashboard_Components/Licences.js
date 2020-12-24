import React from "react"
import tw from "twin.macro" //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Sidebar from "./Sidebar"
import LicenseScreen from "./LicenseScreen";

const Licenses = () => {
    return (
        <div tw="flex flex-row">
            <Sidebar />
            <LicenseScreen/>
        </div>
    )
}

export default Licenses