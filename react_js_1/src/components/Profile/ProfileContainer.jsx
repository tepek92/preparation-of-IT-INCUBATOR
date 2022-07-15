import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import WithAuthNavigate from "../../hoc/WithAuthNavigate";
import { compose } from "redux";
import withRouter from "../../hoc/WithRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfile(this.props.router.params.userId || 24767);
  }

  render() {
    return (
      <div>
        <Profile {...this.props} userProfile={this.props.userProfile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
  };
};

export default  compose(connect(mapStateToProps, { setUserProfile }), withRouter , WithAuthNavigate)(ProfileContainer)
