import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalCountUsers,
  setUsers,
  setIsFetching,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    // alert("NEW");
    this.props.setIsFetching(true);
    usersAPI.getUsers(this.props.currentPage, this.props.usersCountPage).then(
      (data) => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalCountUsers(data.totalCount);
      }
    );
  }

  setNewCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.setIsFetching(true);
    usersAPI.getUsers(currentPage, this.props.usersCountPage).then((data) => {
      this.props.setUsers(data.items);
      this.props.setIsFetching(false);
    });
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
});

export default connect(mapStateToProps, {
  follow,
  setUsers,
  setCurrentPage,
  setTotalCountUsers,
  setIsFetching,
})(UsersContainer);
