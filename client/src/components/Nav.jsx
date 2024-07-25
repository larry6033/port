import { Link } from "react-router-dom";
function Nav() {
  return (
    <div>
      <ul className="text-[white] flex justify-between bg-[blue] py-[2em]">
        <Link to="">
          {" "}
          <li>About</li>
        </Link>

        <Link>
          {" "}
          <li>Projects</li>
        </Link>

        <Link>
          {" "}
          <li>Contact Me</li>
        </Link>
      </ul>
    </div>
  );
}
export default Nav;
