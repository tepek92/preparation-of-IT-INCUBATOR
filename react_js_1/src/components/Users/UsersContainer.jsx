import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalCountUsersAC,
  setUsersAC,
  setIsFetchingAC,
} from "../../redux/usersReducer";
import Users from "./Users";
import preloader from "../../img/oval.svg"

class UsersContainer extends React.Component {
  componentDidMount() {
    // alert("NEW");
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCountPage}`
      )
      .then((response) => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCountUsers(response.data.totalCount);
      });
  }

  setNewCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersCountPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setIsFetching(false);
      });
  };

  render() {
    return (
      <div>{this.props.isFetching ? <img src={preloader} alt=""/> :  
        <Users
          users={this.props.users}
          currentPage={this.props.currentPage}
          totalCount={this.props.totalCount}
          usersCountPage={this.props.usersCountPage}
          follow={this.props.follow}
          setNewCurrentPage={this.setNewCurrentPage}
        />}
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
  isFetching: state.usersPage.isFetching
});

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
    setTotalCountUsers: (totalCount) =>
      dispatch(setTotalCountUsersAC(totalCount)),
    setIsFetching: (isFetching) => dispatch(setIsFetchingAC(isFetching)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
