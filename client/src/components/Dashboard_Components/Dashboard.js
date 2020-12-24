import React from "react"
import tw from "twin.macro" //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Sidebar from "./Sidebar"
import DashboardScreen from "./DashboardScreen"

const Dashboard = () => {
    return (
        <div tw="flex sticky flex-row">
            <Sidebar />
            <DashboardScreen />
        </div>
    )
}

export default Dashboard