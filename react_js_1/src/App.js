import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import withRouter from "./hoc/WithRouter";
import { connect } from "react-redux";
import { compose } from "redux";
import { setInitialize } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.setInitialize();
  }

  render() {
    
    if (!this.props.initialize) return <Preloader />;

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialize: state.initialize.initializeStatus,
});
export default compose(
  withRouter,
  connect(mapStateToProps, { setInitialize })
)(App);
