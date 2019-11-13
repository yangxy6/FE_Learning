import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from './react-redux'
class Header extends Component {
  static PropTypes = {
    themeColor: PropTypes.string
  }

  render() {
    return <div style={{ color: this.props.themeColor }}>React小书</div>
  }
}
const mapStateToProps = state => {
  return {
    themeColor: state.themeColor
  }
}
export default connect(mapStateToProps)(Header)
