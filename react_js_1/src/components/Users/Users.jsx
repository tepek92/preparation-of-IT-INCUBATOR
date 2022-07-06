import axios from "axios";
import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/user.png";

class Users extends React.Component {
  componentDidMount() {
    // alert("NEW");
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersCountPage}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCountUsers(response.data.totalCount);
      });
  }

  setNewCurrentPage(currentPage) {
    this.props.setCurrentPage(currentPage);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersCountPage}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    let page = [];
    let pagesCount = Math.ceil(this.props.totalCount / this.props.usersCountPage);

    for (let i = 1; i <= pagesCount; i++) {
      page.push(i);
    };

    let centralP = this.props.currentPage;
    let leftP = centralP - 5 < 0 ? 0 : centralP - 5;
    let rigtP = centralP + 5 > pagesCount ? pagesCount : centralP + 5;

    let slicePage = page.slice(leftP, rigtP);
    
    return (
      <div>
        <span onClick={() => this.setNewCurrentPage(1)}>{"<<<"}</span>
        {slicePage.map(p => <span className={p === this.props.currentPage && s.active} onClick={() => this.setNewCurrentPage(p)}> {p} </span>)}
        <span onClick={() => this.setNewCurrentPage(pagesCount)}>{">>>"}</span>
        {this.props.users.map((u) => {
          return (
            <div>
              <img
                className={s.userAvatar}
                src={u.photos.small || userPhoto}
                alt=""
              />
              <div> {u.name} </div>
              <div> {u.status} </div>
              <button onClick={() => this.props.follow(u.id)}>
                {u.followed ? "Unfollow" : "Follow"}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
