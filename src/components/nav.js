import { Link } from "react-router-dom";
import logo from "../img/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/auth/authSlice";
import { resetProfile } from "../features/profile/profileSlice";

export default function Nav() {
  const profile = useSelector((state) => state.profile);

  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logOut());
    dispatch(resetProfile());
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {profile.firstName === null ? (
          <Link to="/user/login" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign in
          </Link>
        ) : (
          <>
            <Link to="/profile" className="main-nav-item">
              {profile.firstName} {profile.lastName}
            </Link>
            <Link to="/" className="main-nav-item" onClick={handleLogOut}>
              <FontAwesomeIcon icon={faUserCircle} />
              Sign out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
