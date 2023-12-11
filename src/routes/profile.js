import { useSelector } from "react-redux";
import Footer from "../components/footer";
import Nav from "../components/nav";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import EditUserInfo from "../components/editUserInfo";
import Account from "../components/account";

export default function Profile() {
  const profile = useSelector((state) => state.profile);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  // SI IL N'Y A PAS DE TOKEN, REDIRECTION PAGE SIGN IN
  useEffect(() => {
    if (!token) {
      navigate("user/login");
    }
  }, [token, navigate, profile]);

  // POUR DISPLAY LE FORM EDIT USER INFO
  const [editUserInfoForm, setEditUserInfoForm] = useState("none");
  function handleButtonEditUserInfo() {
    setEditUserInfoForm(editUserInfoForm === "none" ? "block" : "none");
  }
  return (
    <>
      <Nav />

      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {profile.userName}!
          </h1>
          <button className="edit-button" onClick={handleButtonEditUserInfo}>
            {editUserInfoForm === "none" ? "Edit Name" : "Hide Edit Name"}
          </button>
          <div style={{ display: editUserInfoForm }}>
            <EditUserInfo />
          </div>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          amountDescription="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          amountDescription="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          amountDescription="Current Balance"
        />
      </main>
      <Footer />
    </>
  );
}
