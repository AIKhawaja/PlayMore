import React from "react"
import { connect } from "react-redux"
import tw from "twin.macro" //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import SongItem from "./SongItem"

const SongForm = ({ playlist }) => {

    const renderSongs = (n) => {
        if (playlist.length > 0) {
            return playlist.slice(0, n).map(song => {
                return (
                    <SongItem
                        image={song.Song_Art}
                        title={song.Title}
                        artist={song.Artist}
                        duration = {song.Duration}
                    />

                )
            })
        }
        else return
    }



    return (
        <div tw="ml-4 mt-8 w-7/12  ">
            <p tw="font-body font-bold text-gray-800 text-2xl">Your Playlist</p>
            <div tw="flex flex-col mt-5  ">
                <div tw=" overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div
                        tw="align-middle inline-block min-w-full shadow overflow-auto sm:rounded-lg border-b border-gray-200">
                        <table >
                            <thead >
                                <tr>
                                    <th
                                        tw="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Title</th>
                                    <th
                                        tw="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Artist</th>
                                    <th
                                        tw="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Length</th>
                                    <th tw="px-6 py-3 border-b border-gray-200 bg-gray-100"></th>
                                    <th
                                        tw="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        </th>
                                    <th tw="px-6 py-3 border-b border-gray-200 bg-gray-100"></th>
                                </tr>
                            </thead>
                            <tbody tw="bg-white h-48 overflow-y-scroll"   >
                                {renderSongs(5)}
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

export default connect(mapStateToProps)(SongForm)