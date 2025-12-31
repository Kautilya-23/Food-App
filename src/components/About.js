import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1> About Us </h1>
      <User key = {1} name = {"Kautilya (function)"} location = {"Mehsana"} />
      <UserClass key={2} name ={"Kautilya (class)"} location ={"Mehsana"} />
    </div>
  );
};

export default About;
