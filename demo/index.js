function responseInstagram(response) {
  console.warn(response);
};

const Demo = () => (<div>
    <InstagramLogin.InstagramLogin
      clientId="CLIENT_ID"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
      redirectUri="REDIRECT_URL"
    >
      <i className="fab fa-instagram"></i>
      <span> Login with Instagram</span>
    </InstagramLogin.InstagramLogin>
  </div>);

ReactDOM.render(Demo(), document.getElementById("instagram-login"));
