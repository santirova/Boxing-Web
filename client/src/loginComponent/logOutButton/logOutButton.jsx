import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  const firstName = user.name.split(" ")[0];

  return (
    <div className="user-greeting">
      {isAuthenticated ? (
        <div className="center-content">
          <p className="welcome-message">!Hola, {firstName}!</p>
          <button
            className="login"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            LogOut
          </button>
        </div>
      ) : (
        <span>No estás autenticado.</span>
      )}
    </div>
  );
};

export default LogoutButton;
