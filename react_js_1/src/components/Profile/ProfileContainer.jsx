import React from "react";
import { connect } from "react-redux";
import { setUserProfile, getUserStatus, updateUserStatus } from "../../redux/profileReducer";
import Profile from "./Profile";
import WithAuthNavigate from "../../hoc/WithAuthNavigate";
import { compose } from "redux";
import withRouter from "../../hoc/WithRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfile(this.props.router.params.userId || 24767);
    this.props.getUserStatus(this.props.router.params.userId || 24767);
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
    userStatus: state.profilePage.userStatus
  };
};

export default  compose(connect(mapStateToProps, { setUserProfile, getUserStatus, updateUserStatus }), withRouter )(ProfileContainer)
// убрал на вермя WithAuthNavigate проверку залогиненности
