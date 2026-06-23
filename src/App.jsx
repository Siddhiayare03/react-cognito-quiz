import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Quiz from "./Quiz";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div style={{ padding: "20px" }}>
          <h1>React Cognito Quiz App</h1>

          <p>
            Welcome {user?.signInDetails?.loginId || user?.username}
          </p>

          <Quiz />

          <br />

          <button onClick={signOut}>
            Logout
          </button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;