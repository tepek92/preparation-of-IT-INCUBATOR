import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { profileAPI } from "../../api/api";



class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId || 24767;
    profileAPI.getProfile(userId).then((data) => {
        this.props.setUserProfile(data);
      });
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

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileContainer)
);
