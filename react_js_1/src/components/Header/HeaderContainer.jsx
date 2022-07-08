import axios from "axios";
import React from "react";
import Header from "./Header";
import { setUserDataAuth, setUserPhoto } from "../../redux/authReducer";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.data.login) {
          this.props.setUserDataAuth(response.data.data);
          axios
            .get(
              `https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`
            )
            .then((response) => {
              this.props.setUserPhoto(response.data.photos.small);
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
