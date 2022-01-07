import { render } from "@testing-library/react"
import React from "react"
import "./Home.css"
// import WelcomeLogo from "./WelcomeLogo.png"



export const Home = () => (

    <div className="homepage">

        <h1 className="welcome">Welcome to ShowGoer!</h1>
    <div className="home_text">Your comprehensive portal for live music.</div>

    <h4 id="container_heading">Keep up with music news</h4>

    <div id="homepage_container">

        <div className="news-group">
  <div className="news-card">
      <a href="https://www.complex.com/">
    <img className="complex-img-top" src="https://images.complex.com/complex/image/upload/c_fill,f_auto,g_center,w_1200/music-og" alt="music" a href="https://www.complex.com/music/" />
    </a>
    <div className="news-card-body">
      <h5 className="news-card-title">Complex</h5>
      <p className="news-card-text">Check out the latest music news, style, and pop culture.</p>
    </div>
  </div>
  <div className="news-card">
      <a href="https://pitchfork.com/">
    <img className="pitchfork-img-top" src="https://media.pitchfork.com/photos/5c33aa4219f63059050d2419/2:1/w_2560%2Cc_limit/Pitchfork_Wordmark2.jpg" alt="music" />
    </a>
    <div className="news-card-body">
      <h5 className="news-card-title">Pitchfork</h5>
      <p className="news-card-text">Look for newest releases, reviews, and videos.</p>
    </div>
  </div>
  <div className="news-card">
      <a href="https://www.rollingstone.com/">
    <img className="rolling-stone-img-top" src="https://1000logos.net/wp-content/uploads/2020/03/Rolling-Stone-emblem.jpg" alt="Card cap" />
    </a>
    <div className="news-card-body">
      <h5 className="news-card-title">Rolling Stone</h5>
      <p className="news-card-text">Read everything about music, film, TV, interviews, and political news.</p>
    </div>
  </div>
</div>
    </div>

    </div>
)

