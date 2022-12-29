import { NavLink } from "react-router-dom";
export default function Two() {
  return (
    <>
      <div>
        <NavLink to="/">home</NavLink>
        <br />
        <br />
        <NavLink to="/one">one</NavLink>
        <br />
        <br />
        <NavLink to="/second">second</NavLink>
        <br />
        <br />
        <NavLink to="/third/Ankit">Third</NavLink>
      </div>
    </>
  );
}
