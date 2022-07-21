import React from "react";
import { connect } from "react-redux";
import { setUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import Profile from "./Profile";
import WithAuthNavigate from "../../hoc/WithAuthNavigate";
import { compose } from "redux";
import withRouter from "../../hoc/WithRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.router.params.userId || this.props.authorizedUserId;
    this.props.setUserProfile(userID);
    this.props.getUserStatus(userID);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} /> 
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    userStatus: state.profilePage.userStatus,
    authorizedUserId: state.auth.id,
    isAuthorized: state.auth.isAuthorized,

  };
};

export default  compose(connect(mapStateToProps, { setUserProfile, getUserStatus, updateUserStatus }), withRouter, WithAuthNavigate )(ProfileContainer);