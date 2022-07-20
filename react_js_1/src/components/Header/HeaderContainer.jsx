import React from "react";
import Header from "./Header";
import { logout, setAuthStatus } from "../../redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.setAuthStatus();
  }
  render() {

    return <Header {...this.props.state} logout={this.props.logout}/>;
  }
}

const mapStateToProps = (state) => ({
  state: state.auth,
});

export default connect(mapStateToProps, { setAuthStatus, logout })(HeaderContainer);
