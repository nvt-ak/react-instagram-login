const ReactDOM = require('react-dom');
const { InstagramLogin } = require('../dist/instagram-login')

console.log({ test: InstagramLogin })

function responseInstagram(response) {
  console.warn(response);
};

const App = () => {
  const clientId = 'CLIENT_ID'
  const redirectUrl = 'REDIRECT_URL' // You can use ngrok to expose your localhost

  return <div>
    <InstagramLogin
      clientId={clientId}
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
      redirectUri={redirectUrl}
      scope='user_profile,user_media,publish_video,pages_show_list,instagram_basic,instagram_content_publish,pages_read_engagement'
    >
      <i className="fab fa-instagram"></i>
      <span> Login with Instagram</span>
    </InstagramLogin>

    <div style={{ marginTop: 10, marginBottom: 10 }}></div>

    <InstagramLogin
      clientId={clientId}
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
      redirectUri={redirectUrl}
      render={({ onClick }) => (
        <button
          style={{
            display: "block",
            border: 0,
            borderRadius: 3,
            boxShadow: "rgba(0, 0, 0, 0.5) 0 1px 2px",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "19px",
            margin: "5px",
            overflow: "hidden",
            padding: "0 10px",
            userSelect: "none",
            background:
              "linear-gradient(to right, rgb(214, 146, 60) 0%, rgb(160, 11, 143) 50%, rgb(56, 10, 115) 100%)",
          }}
          onClick={onClick}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              height: "100%",
              margin: ".5em",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                minWidth: 26,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                viewBox="0 0 169.063 169.063"
              >
                <g fill="#FFFFFF">
                  <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752   c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407   c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752   c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                  <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561   C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561   c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                  <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78   c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78   C135.661,29.421,132.821,28.251,129.921,28.251z" />
                </g>
              </svg>
            </div>
            <div
              style={{ textAlign: "left", width: "100%", paddingLeft: "1em" }}
            >
              Login with Instagram
            </div>
          </div>
        </button>
      )}
    />
  </div>;
}

ReactDOM.render(
  <App />,
  document.getElementById('instagram-login')
);