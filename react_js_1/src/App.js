import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "./redux/reduxStore";

import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";

import withRouter from "./hoc/WithRouter";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { setInitialize } from "./redux/appReducer";
import Preloader from "./components/common/Preloader/Preloader";

const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
  import("./components/Users/UsersContainer")
);
const Login = React.lazy(() => import("./components/Login/Login"));


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
          <Suspense fallback={<div>Загрузка...</div>}>
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
          </Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialize: state.initialize.initializeStatus,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { setInitialize })
)(App);

const AppProvider = (props) => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default AppProvider;
