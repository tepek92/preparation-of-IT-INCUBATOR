import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import WithAuthNavigate from "../../hoc/WithAuthNavigate";

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

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

let AuthNavigateComponent = WithAuthNavigate(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  withRouter(AuthNavigateComponent)
);
