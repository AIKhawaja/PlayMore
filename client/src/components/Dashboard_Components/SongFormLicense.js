import React from "react"
import { connect } from "react-redux"
import tw from "twin.macro" //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import SongItemLicense from "./SongItemLicense"

const SongFormLicense = ({ playlist }) => {

    const renderSongLicenses = (n) => {
        return playlist.slice(0, n).map(song => {
            return (
                <SongItemLicense
                    image={song.Song_Art}
                    title={song.Title}
                    artist={song.Artist}
                    status="Licensed"
                />
            )
        })
    }


    return (
        <div tw="ml-4 mt-8 w-10/12  ">
            <p tw="font-body font-bold text-gray-700 text-2xl">Songs you've Played</p>
            <div tw="flex flex-col mt-5  ">
                <div tw=" overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div
                        tw="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                        <table tw="min-w-full">
                            <thead>
                                <tr>
                                    <th
                                        tw="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Title</th>
                                    <th
                                        tw="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Artist</th>
                                    <th
                                        tw="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Status</th>
                                    <th
                                        tw="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    </th>
                                </tr>
                            </thead>
                            <tbody tw="bg-white">
                                {renderSongLicenses(6)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (playlist) => {
    return playlist

}


export default connect(mapStateToProps)(SongFormLicense)