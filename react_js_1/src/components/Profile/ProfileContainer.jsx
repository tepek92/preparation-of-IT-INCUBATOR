import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";


class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.setUserProfile(this.props.router.params.userId || 24767);
  }

  render() {
    return this.props.isAuthorized 
    ? (<div><Profile {...this.props} userProfile={this.props.userProfile} /></div>)
    : (<Navigate to={"/login"} />);
  }
}

const mapStateToProps = (state) => {
  return {
    userProfile: state.profilePage.userProfile,
    isAuthorized: state.auth.isAuthorized
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
