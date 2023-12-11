import { useDispatch, useSelector } from "react-redux";
import "./editUserInfo.css";
import { useState } from "react";
import { setProfile } from "../features/profile/profileSlice";

export default function EditUserInfo() {
  const profile = useSelector((state) => state.profile);

  const [usernameValue, setUserNameValue] = useState(profile.userName);

  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  async function handleSubmitEditUserInfo(e) {
    e.preventDefault();
    const data = { userName: usernameValue };
    try {
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: "Bearer" + token,
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      dispatch(setProfile(result.body));
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  }
  return (
    <>
      <h2>Edit user info</h2>
      <form
        action="PUT"
        id="editUserInfoForm"
        onSubmit={handleSubmitEditUserInfo}
      >
        <label htmlFor="userName">User name: </label>
        <input
          id="userName"
          type="text"
          value={usernameValue}
          onChange={(e) => {
            setUserNameValue(e.target.value);
          }}
        />
        <label htmlFor="firstName">First name: </label>
        <input id="firstName" type="text" value={profile.firstName} disabled />
        <label htmlFor="lastName">Last name: </label>
        <input id="lastName" type="text" value={profile.lastName} disabled />
        <input className="edit-button" type="submit" value="Save" />
        <input
          className="edit-button"
          type="button"
          value="Cancel"
          onClick={() => {
            setUserNameValue(profile.userName);
          }}
        />
      </form>
    </>
  );
}
