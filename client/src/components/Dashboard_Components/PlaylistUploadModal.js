import React, { useEffect, useState } from "react"
import {connect} from "react-redux"
import tw from "twin.macro"; // eslint-disable-line
import ClipLoader from "react-spinners/ClipLoader"
import { css } from "styled-components/macro"; // eslint-disable-line
import axios from "axios"
import {fetchPlaylist} from "../../actions"
import ReactDOM from "react-dom"



const PlaylistUploadModal = ({ close,fetchPlaylist }) => {        
    const [fetchingPlaylist, setFetchingPlaylist] = useState(false)
    const [playlistURL, setPlayListURL] = useState("")

    const handleSubmit =  async (playlistURL) => {
        await fetchPlaylist(playlistURL)
        setFetchingPlaylist(false)
        close()

    }
    
    return ReactDOM.createPortal(
        <div tw="fixed z-10 inset-0 overflow-y-auto">
            <div tw="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div tw="absolute inset-0 bg-gray-700 opacity-75"
                    onClick={() => close()}></div>
                <span tw="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
                <div tw="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                    <div tw="bg-gray-400 rounded px-1 py-1">
                        <div tw="flex flex-col items-center py-6 space-y-3">
                            <svg
                                fill="#191414"
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="60"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 0c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14zm-7 4c-4.418 0-8 3.582-8 8 0 4.419 3.582 8 8 8s8-3.581 8-8c0-4.418-3.582-8-8-8zm3.669 11.539c-.144.236-.451.31-.686.166-1.878-1.148-4.243-1.408-7.028-.772-.268.062-.535-.106-.597-.375-.061-.268.106-.535.375-.596 3.048-.697 5.662-.397 7.771.891.235.144.309.451.165.686zm.979-2.178c-.181.293-.565.385-.858.205-2.15-1.322-5.428-1.704-7.972-.932-.33.099-.678-.087-.778-.416-.1-.33.086-.677.416-.778 2.905-.881 6.517-.454 8.987 1.063.293.181.385.565.205.858zm.084-2.269c-2.578-1.531-6.832-1.672-9.294-.925-.395.12-.813-.103-.933-.498-.12-.396.103-.814.499-.934 2.826-.858 7.523-.692 10.492 1.07.356.211.472.671.262 1.026-.211.355-.671.472-1.026.261z" />
                            </svg>
                            <span tw="text-2xl font-body font-semibold text-gray-900 mb-4">Link Your Playlist!</span>
                            <div tw="w-3/4 flex flex-col">
                                <input
                                    type="text"
                                    value={playlistURL}
                                    onChange={link => {
                                        setPlayListURL(link.target.value)
                                    }}
                                    tw=" outline-none p-2 mb-2 text-gray-900 rounded-xl resize-none placeholder-gray-500" placeholder="https://open.spotify.com/playlist/..." />
                                <button
                                    onClick={() => {
                                        setFetchingPlaylist(true)
                                        handleSubmit(playlistURL)
                                    }}
                                    tw="focus:outline-none  py-3 my-4 bg-green-600 hover:bg-green-700 rounded-xl ">
                                    <div tw="flex items-center  justify-center flex-row">
                                        <ClipLoader
                                            size={20}
                                            color={"white"}
                                            loading={fetchingPlaylist}
                                        />
                                        <p tw=" text-lg place-self-center font-body text-white  ml-4 "> Get My Playlist </p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        , document.querySelector("#playlist-modal")
    )
}



export default connect(null,{fetchPlaylist})(PlaylistUploadModal)


