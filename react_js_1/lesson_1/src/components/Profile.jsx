import presswall from "../img/presswall.jpg"
import avatar from "../img/avatar.jpg"

const Profile = () => {
  return (
    <div className="content">
      <div>
        <img className="presswall" src={presswall} alt="presswall"/>
      </div>
      <div>
        <img className="avatar" src={avatar} alt="avatar"/> +
        description
      </div>
      <div>
        My posts
        <div>New post</div>
        <div>
          <div>Post1</div>
          <div>Post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
