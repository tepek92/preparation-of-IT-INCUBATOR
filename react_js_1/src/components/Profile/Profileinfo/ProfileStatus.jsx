import React from "react";
// import s from "./Profileinfo.module.css";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    changeMode = () => {
        this.state.editMode ? this.setState({editMode: false}) : this.setState({editMode: true})
    };

    render() {
    return (
    <div>
        {this.state.editMode && <input autoFocus onBlur={this.changeMode} value={this.props.aboutMe} />}
        {!this.state.editMode && <span onDoubleClick={this.changeMode}>{this.props.aboutMe}</span>}
    </div>
  );
};

}

export default ProfileStatus;