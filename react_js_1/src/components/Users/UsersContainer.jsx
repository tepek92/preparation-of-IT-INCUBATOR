import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalCountUsersAC, setUsersAC } from "../../redux/usersReducer";
import Users from "./Users";

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
    setTotalCountUsers: (totalCount) => dispatch(setTotalCountUsersAC(totalCount)),
  };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
