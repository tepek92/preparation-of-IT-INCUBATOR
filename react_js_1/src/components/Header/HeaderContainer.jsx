import React from "react";
import Header from "./Header";
import { logout } from "../../redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
 
  render() {

    return <Header {...this.props.state} logout={this.props.logout}/>;
  }
}

const mapStateToProps = (state) => ({
  state: state.auth,
});

export default connect(mapStateToProps, { logout })(HeaderContainer);
