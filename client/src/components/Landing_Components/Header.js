import React from "react";
import HeaderStyle from "./HeaderStyle"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import * as typeformEmbed from '@typeform/embed'

const mapStateToProps = ({ auth }) => {
  return { auth }
}

const Header = ({ auth }) => {
  const renderContent = (auth) => {
    switch (auth) {
      case null:
        return <Link >Getting Authentication</Link>
      case false:
        return <Link to="/signup">Get Started</Link>
      default:
        return <Link to="/dashboard">Go to your Dashboard</Link>
    }
  }

  return (
    <HeaderStyle />

  )
}

export default connect(mapStateToProps)(Header)