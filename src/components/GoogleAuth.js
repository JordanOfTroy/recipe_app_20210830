import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";
import history from "../History";
import { db } from "./Firebase";
const { REACT_APP_CLIENT_ID } = process.env;

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: REACT_APP_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = async (isSignedIn) => {
    if (isSignedIn) {
      const profile = this.auth.currentUser.get().getBasicProfile();
      const user = {
        fName: profile.getGivenName(),
        lName: profile.getFamilyName(),
        email: profile.getEmail(),
        userId: profile.getId(),
      };

      try {
        let userRefs = await db
          .collection("users")
          .where("userId", "==", user.userId)
          .get();

        if (!userRefs.size) {
          console.log("hitting?");
          await db.collection("users").add(user);
        }
      } catch (e) {
        console.error(e);
      }

      this.props.signIn(user);
      history.push(`/home/${user.userId}`);
    } else {
      this.props.signOut();
      history.push("/");
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.onSignOutClick}>
          <i className="google icon" />
          Sign out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignInClick}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
