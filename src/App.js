import "./App.css";

import twitter from "./images/twitter.svg";
import instagram from "./images/instagram.svg";

function App() {
  return (
    <div className="container">
      <div className="headers">
        <h1 className="main-header">Hello My name is İsmail Yılmaz</h1>

        <h2 className="sub-header">Welcome to my personal blog</h2>
      </div>

      <div className="my-social-platforms">
        <h2 className="social-title"></h2>
        <div className="icons-container">
          <a
            className="social-link"
            href="https://www.instagram.com/yilmmaz.ismail"
            target="_blank"
          >
            <img src={twitter} className="icon" />
          </a>
          <a
            className="social-link"
            href="https://twitter.com/yilmmazismail"
            target="_blank"
          >
            <img src={instagram} className="icon" />
          </a>
        </div>
      </div>

      <div className="action-buttons">
        <a className="button" href="mailto: ismailylmz.09@icoud.com">
          send email
        </a>
        <a className="button" href="tel:05454547287">
          call
        </a>
      </div>
    </div>
  );
}

export default App;
