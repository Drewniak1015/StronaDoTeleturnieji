import { Link } from "react-router-dom";

const StarterSite = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Tile">Start</Link>
        </li>
        <li>
          <Link to="/Tile">Edit</Link>
        </li>
        <li>
          <button>Teams</button>
        </li>
      </ul>
    </div>
  );
};

export default StarterSite;
