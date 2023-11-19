import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <div className="loginContainer">
        <h1>Bienvenu!</h1>

        <div className="input-container">
          <label>Identifiant </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Mot de passe </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>

        <a className= "link" href="#">Mot de passe oublié?</a>
        <a className= "link" href="#">Créer un nouveau mot de passe</a>

        <button className="loginBut">
          <p>Se connecter</p>
        </button>

        <button className="siG">
          <img className="Img"
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Trees"
            height="30"
          />
          <p>Utiliser Google</p>
          
        </button>
      </div>
    </div>
  );
}

export default Login;