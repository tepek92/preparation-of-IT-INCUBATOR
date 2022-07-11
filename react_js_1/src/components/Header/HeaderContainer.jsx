import React from "react";
import Header from "./Header";
import { setUserDataAuth, setUserPhoto } from "../../redux/authReducer";
import { connect } from "react-redux";
import { authAPI, profileAPI } from "../../api/api";


class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.getMe().then((data) => {
        if (data.login) {
          this.props.setUserDataAuth(data);
          profileAPI.getProfile(data.id).then((data) => {
              this.props.setUserPhoto(data.photos.small);
            });
        }
      });
  }

  render() {
    return <Header {...this.props.state} />;
  }
}

const mapStateToProps = (state) => ({
  state: state.auth,
});

export default connect(mapStateToProps, { setUserDataAuth, setUserPhoto})(HeaderContainer);
