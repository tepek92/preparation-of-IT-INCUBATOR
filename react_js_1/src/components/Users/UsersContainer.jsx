import { connect } from "react-redux";
import { followAC, setUsersAC} from "../../redux/usersReducer";
import Users from "./Users";

const mapStateToProps = (state) => ({
    users: state.usersPage.users
});

const mapDispatchToProps = (dispatch) => {
    return ({
        follow: (userId) => dispatch(followAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    });
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;