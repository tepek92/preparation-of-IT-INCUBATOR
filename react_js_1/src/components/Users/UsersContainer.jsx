import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalCountUsersAC,
  setUsersAC,
} from "../../redux/usersReducer";
import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    // alert("NEW");
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCountPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountUsers(response.data.totalCount);
      });
  }

  setNewCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersCountPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        users={this.props.users}
        currentPage={this.props.currentPage}
        totalCount={this.props.totalCount}
        usersCountPage={this.props.usersCountPage}
        follow={this.props.follow}
        setNewCurrentPage={this.setNewCurrentPage}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  currentPage: state.usersPage.currentPage,
  totalCount: state.usersPage.totalCount,
  usersCountPage: state.usersPage.usersCountPage,
  pagesCount: state.usersPage.pagesCount,
});

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setTotalCountUsers: (totalCount) =>
      dispatch(setTotalCountUsersAC(totalCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
