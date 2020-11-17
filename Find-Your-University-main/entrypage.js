import React from 'react';
import './entrypage.css';
import {Link} from 'react-router-dom';

const App = () => {
  return (
      <div className="App">
          <div id="partone">
              <header>
                  <a class="home" href="#">FindMyUniv</a>
                  <ul>
                      <Link style={{ textDecoration: 'none' }} to="/entry"><li><a id="roll" target="blank">Let's Explore</a></li></Link>
                      <li><a style={{ textDecoration: 'none' }} class="about" href="#parttwo">About Us</a></li>
                  </ul>
              </header>
              <h2 class="title">Let's Find Your Perfect University</h2>
          </div>
          <section></section>
          <div class="contain" id="parttwo">
              <h2>What is this Website All About</h2>
              <p>Here we help High School Students to find out their best suitable college according to their<br/>
              --- Ranks<br/>
              --- Desired place of location<br/>
              --- According to interested branch<br/>
              --- According to Respective Senior<br/>
              --- According to Highest-package placement</p>
              <div class="containertwo">
                  <h2>Do have a look over our website.Thank You!</h2>
                  <p>We will be online in less time</p>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              </div>
          </div>
      </div>
  );
}

export default App;
