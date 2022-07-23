import React from "react";
import { connect } from "react-redux";
import { setUserProfile, setUserStatus, updateUserStatus } from "../../redux/profileReducer";
import Profile from "./Profile";
import WithAuthNavigate from "../../hoc/WithAuthNavigate";
import { compose } from "redux";
import withRouter from "../../hoc/WithRouter";
import { getAuthorizedUserId, getIsAuthorized, getUserProfile, getUserStatus } from "../../redux/profileSelector";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.router.params.userId || this.props.authorizedUserId;
    this.props.setUserProfile(userID);
    this.props.setUserStatus(userID);
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
    userProfile: getUserProfile(state),
    userStatus: getUserStatus(state),
    authorizedUserId: getAuthorizedUserId(state),
    isAuthorized: getIsAuthorized(state),

  };
};

export default  compose(connect(mapStateToProps, { setUserProfile, setUserStatus, updateUserStatus }), withRouter, WithAuthNavigate )(ProfileContainer);