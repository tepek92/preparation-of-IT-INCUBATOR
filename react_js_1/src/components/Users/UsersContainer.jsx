import React from "react";
import { connect } from "react-redux";
import { follow, getUsersInfo } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import WithAuthNavigate from "../../hoc/WithAuthNavigate";
import { getIsFetching, getIsFollowedProgress, getPagesCount, getTotalCount, getUsers, getUsersCountPage, getСurrentPage } from "../../redux/usersSelector";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersInfo(this.props.currentPage, this.props.usersCountPage);
  }

  setNewCurrentPage = (currentPage) => {
    this.props.getUsersInfo(currentPage, this.props.usersCountPage);
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={this.props.users}
            currentPage={this.props.currentPage}
            totalCount={this.props.totalCount}
            usersCountPage={this.props.usersCountPage}
            follow={this.props.follow}
            setNewCurrentPage={this.setNewCurrentPage}
            setIsDisabled={this.props.setIsDisabled}
            isFollowedProgress={this.props.isFollowedProgress}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
  currentPage: getСurrentPage(state),
  totalCount: getTotalCount(state),
  usersCountPage: getUsersCountPage(state),
  pagesCount: getPagesCount(state),
  isFetching: getIsFetching(state),
  isFollowedProgress: getIsFollowedProgress(state),
});

export default compose(connect(mapStateToProps, { follow, getUsersInfo }), WithAuthNavigate)(UsersContainer);
