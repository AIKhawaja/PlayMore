import React from "react";
import tw from "twin.macro"; // eslint-disable-line
import { css } from "styled-components/macro"; // eslint-disable-line
import AnalyticBoard from "./AnalyticBoard";
import SongForm from "./SongForm"
import PaymentButton from "./PaymentButton"
import UploadButton from "./UploadButton"
import { connect } from "react-redux"

const DashboardScreen = ({ auth, playlist }) => {

  const renderFirstName = (auth) => {
    switch (auth) {
      case null:
        return
      default:
        return (
          <h1 tw="font-body ml-6 font-semibold text-gray-900 text-4xl">
            Hey {auth.displayName.split(" ")[0]} !
          </h1>)
    }
  }

  return (
    <div tw="max-h-screen h-screen w-full bg-white">
      <div tw="ml-12 mt-10">
        {renderFirstName(auth)}
        <p tw="font-body ml-6 text-gray-700 text-xl">Here is your Dashboard Overview</p>
        <AnalyticBoard tw="ml-4 mr-8" username="xqcow" />
        <div tw="flex flex-row">
          <SongForm />
          <UploadButton />
        </div>
        <iframe src="https://open.spotify.com/embed/playlist/0lmP70o5aRD791JoGpKZhO" width="1240" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth, playlist }) => {
  return { auth, playlist }
}

export default connect(mapStateToProps)(DashboardScreen)

