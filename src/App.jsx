import { useState } from "react";
import menuIcon from "../public/images/icon-menu.svg";
import menuIconClose from "../public/images/icon-menu-close.svg";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div className="container">
      <header>
        <img src="../public/images/logo.svg" alt="Logo" />

        <nav>
          <ul className={isClicked ? "active" : null}>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>

          <div className="mobile" onClick={handleClick}>
            <img src={isClicked ? menuIconClose : menuIcon} alt="Menu Icon" />
          </div>
        </nav>
      </header>
      <div className="container home-container">
        <main>
          <img
            src="../public/images/image-web-3-desktop.jpg"
            alt="Image Web-3 Desktop"
          />
          <div className="main-article-content">
            <h1>The Bright Future of Web 3.0?</h1>
            <div className="main-article-read">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="read-more">READ MORE</button>
            </div>
          </div>
        </main>
        <aside>
          <h2>New</h2>
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <h3>The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </aside>
      </div>
      <div className="top-news">
        <article className="card">
          <img
            src="../public/images/image-retro-pcs.jpg"
            alt="Retro Computer"
          />
          <div className="top-news__content">
            <div className="number">01</div>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </article>

        <article className="card">
          <img src="../public/images/image-top-laptops.jpg" alt="Laptops" />
          <div className="top-news__content">
            <div className="number">02</div>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </article>

        <article className="card">
          <img
            src="../public/images/image-gaming-growth.jpg"
            alt="Controller"
          />
          <div className="top-news__content">
            <div className="number">03</div>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
