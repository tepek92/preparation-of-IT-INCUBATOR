import React from "react";
// import s from "./Profileinfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    userStatus: this.props.userStatus,
  };

  changeMode = (e) => {
    if (this.state.editMode) {
      this.setState({ editMode: false });
      this.props.updateUserStatus(e.target.value);
    } else {
        this.setState({ editMode: true });
    }
    
  };

  changeStatus = (e) => {
    this.setState({ userStatus: e.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.userStatus !== this.props.userStatus) {
        this.setState({userStatus: this.props.userStatus});
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode && (
          <input onChange={this.changeStatus}
            autoFocus
            onBlur={this.changeMode}
            value={this.state.userStatus}
          />
        )}
        {!this.state.editMode && (
          <span onDoubleClick={this.changeMode}>
            {this.props.userStatus || "Добавить статус"}
          </span>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
