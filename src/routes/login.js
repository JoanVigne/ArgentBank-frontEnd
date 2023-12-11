import Nav from "../components/nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer";
/* import { useState } from "react"; */
import Auth from "../features/auth/Auth";

export default function Login() {
  return (
    <>
      <Nav />

      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
          <h1>Sign In</h1>
          <Auth />
        </section>
      </main>
      <Footer />
    </>
  );
}
