import React from "react";
import { connect } from "react-redux";
import { follow, getUsers } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.usersCountPage);
  }

  setNewCurrentPage = (currentPage) => {
    this.props.getUsers(currentPage, this.props.usersCountPage);
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
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalCount: state.usersPage.totalCount,
  usersCountPage: state.usersPage.usersCountPage,
  pagesCount: state.usersPage.pagesCount,
  isFetching: state.usersPage.isFetching,
  isFollowedProgress: state.usersPage.isFollowedProgress,
});

export default connect(mapStateToProps, { follow, getUsers })(UsersContainer);
