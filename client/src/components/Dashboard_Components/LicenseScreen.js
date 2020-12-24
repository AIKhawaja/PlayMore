import React  from "react";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnalyticBoard from "./AnalyticBoard";
import SongFormLicense from "./SongFormLicense"
import { connect } from "react-redux"

const LicenseScreen = ({ auth }) => {

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
        <AnalyticBoard tw="ml-4" username="xqcow" />
        <div tw="flex flex-row">
        <SongFormLicense tw="flex"/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => {
  return { auth }
}

export default connect(mapStateToProps)(LicenseScreen)