import React, { useState } from "react"
import PlaylistUploadModal from "./PlaylistUploadModal"
import tw from "twin.macro" //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line

const UploadButton = () => {

  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  
  }

  const renderContent = () => {
    switch(modalOpen){
      case true :
        return <PlaylistUploadModal close={closeModal}/>
      default:
        return
    }
  }

  return (
    <div >
      {renderContent()}
      <p tw="ml-40 mt-8 font-body font-bold text-gray-800 text-2xl">Upload Your Playlist</p>
      <button onClick={openModal} tw="w-48 h-40 ml-40 mt-8 flex flex-col justify-items-center items-center px-4 py-8 bg-spotify-green text-gray-700 rounded-lg shadow-lg tracking-wide uppercase border border-gray-400 cursor-pointer hover:bg-gray-500 hover:text-white">
        <svg
          fill="#191414"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
        >
          <path d="M19 0c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14zm-7 4c-4.418 0-8 3.582-8 8 0 4.419 3.582 8 8 8s8-3.581 8-8c0-4.418-3.582-8-8-8zm3.669 11.539c-.144.236-.451.31-.686.166-1.878-1.148-4.243-1.408-7.028-.772-.268.062-.535-.106-.597-.375-.061-.268.106-.535.375-.596 3.048-.697 5.662-.397 7.771.891.235.144.309.451.165.686zm.979-2.178c-.181.293-.565.385-.858.205-2.15-1.322-5.428-1.704-7.972-.932-.33.099-.678-.087-.778-.416-.1-.33.086-.677.416-.778 2.905-.881 6.517-.454 8.987 1.063.293.181.385.565.205.858zm.084-2.269c-2.578-1.531-6.832-1.672-9.294-.925-.395.12-.813-.103-.933-.498-.12-.396.103-.814.499-.934 2.826-.858 7.523-.692 10.492 1.07.356.211.472.671.262 1.026-.211.355-.671.472-1.026.261z" />
        </svg>
        <span tw="mt-4 text-center font-body font-extrabold text-white ">SPOTIFY</span>
        <input type="file" tw="hidden" />
      </button>
      <button onClick={openModal} tw="w-48 h-40 ml-40 mt-8 flex flex-col justify-items-center items-center px-4 py-8 bg-apple text-gray-700 rounded-lg shadow-lg tracking-wide uppercase border border-gray-400 cursor-pointer hover:bg-gray-500 hover:text-white">
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
        >
          <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
        </svg>
        <span tw="mt-4 text-center font-body font-extrabold text-white ">APPLE MUSIC</span>
        <input type="file" tw="hidden" />
      </button>
    </div>
  );
}

export default UploadButton
