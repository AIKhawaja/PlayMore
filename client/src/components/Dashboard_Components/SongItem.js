import React from "react"
import tw from "twin.macro" //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line


const SongItem = ({title,artist,duration,image}) => {
    return(
    <tr>
        <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div tw="flex items-center">
                <div tw="flex-shrink-0 h-10 w-10">
                    <img tw="h-10 w-10 rounded-full"
                        src={image}
                        alt="" />
                </div>

                <div tw="ml-4">
                    <div tw="text-sm leading-5 font-medium text-gray-900">{title}
                                                        </div>                                                </div>
            </div>
        </td>

        <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <div tw="text-sm leading-5 text-gray-900">{artist}</div>
        </td>

        <td tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <span
                tw="px-2 inline-flex text-sm  leading-5 font-semibold rounded-full text-green-800">{duration}</span>
        </td>

        <td
            tw="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
            </td>

        <td
            tw="pr-32 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
            <a href="#" tw="text-red-600 hover:text-red-900">Remove</a>
        </td>
    </tr>
    )
}
export default SongItem