import React from 'react'
import './App.css';
import './pages/home.css';
import BackgroundSlider from "./pages/BackgroundSlider.jsx";

import {CiLocationOn} from 'react-icons/ci';
import {BsCalendarDate} from 'react-icons/bs';
import {SiYourtraveldottv} from 'react-icons/si'
import Cardarray2 from './pages/Cardarray2';

function Home() {
  return (
    <section className="HOME">
      <div className="bigsection">
        <body>
          <BackgroundSlider />
        </body>
      </div>

      <div className="home_section2">
        <div className="section2_a">
          <div>
            <CiLocationOn className="home_icon1" />
            <input
              type="text"
              placeholder="When To ?"
              className="section2_a2"
            />
          </div>
          <BsCalendarDate className="home_icon2" />
          <div>
            <select id="date" className="section2_a1">
              <option value="When?" className="T">
                When?
              </option>
              <option value="January" className="T">
                January
              </option>
              <option value="February" className="T">
                February
              </option>
              <option value="March" className="T">
                March
              </option>
              <option value="April" className="T">
                April
              </option>
              <option value=" May" className="T">
                May
              </option>
              <option value="June" className="T">
                June
              </option>
              <option value="July" className="T">
                July
              </option>
              <option value="August" className="T">
                August
              </option>
              <option value="September" className="T">
                September
              </option>
              <option value="October" className="T">
                October
              </option>
              <option value="November" className="T">
                November
              </option>
              <option value="December" className="T">
                December
              </option>
            </select>
          </div>
          <SiYourtraveldottv className="home_icon3" />
          <div>
            <select id="travel" className="section2_a1">
              <option value="" className="T">
                Travel Type
              </option>
              <option value="Adenture" className="T">
                Adventure
              </option>
              <option value="Historical" className="T">
                Historical
              </option>
              <option value=" Sea side" className="T">
                Sea side
              </option>
              <option value="Discovery" className="T">
                Discovery
              </option>
            </select>
          </div>

          <div>
            <button type="submit" className="section2_a3">
              <b> FIND NOW</b>
            </button>
          </div>
        </div>
         <div>


        <div className="fixhome">

          <div className="image-container">
            <img src="images-grid1.jpg" className="grid1" />
            <img src="image-grid2.jpg" className="grid2" />
          </div>
          <div className="section2b1">
            <div>
              <p className="about">About Us</p>
            </div>
            <div className="about2">
              <p>
                Plan Your <b>Trip </b>with <b>Us</b>
              </p>
            </div>
            <div className="section2_b2">
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and
              </p>

              <p>
                Consonantia, there live the blind texts. Separated they live in
                Bookmarksgrove
              </p>
              <p>
                right at the coast of the Semantics, a large language ocean. A
                small river named
              </p>
              <p>
                Duden flows by their place and supplies it with the necessary
                regelialia. It is a
              </p>
              <p>
                paradisematic country, in which roasted parts of sentences fly
                into your mouth.
              </p>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost
              </p>
              <p>
                unorthographic. Italic Mountains, she had a last view back on
                the skyline
              </p>
            </div>
            <div>
              <button type="submit" className="BUTTOr">
                Read More
              </button>
            </div>
          </div>
        </div>

      

        </div>

          <div className="resp_text">
          <div className="offer_sec1">
            <p>Amazing Tours</p>
          </div>

          <div className="sec2">
            <p>Trending, Best Selling Tours And</p>
          </div>
          <div className="sec3">Fun Destinations</div>
        </div>

        <div className="home_sec1">
          <div className="homecards">
            <div className="mapping">
              {Cardarray2.map((item) => (
                <div className="tourC_subb">
                  <div className="JUST1">
                    <img src={item.image} className="TB_innovation" />
                  </div>

                  <div className="TB2">
                    <div className="JUST2">
                      <p className="textb1">{item.country}</p>
                    </div>

                    <div className="TB3">
                      <div className="tbtext2">
                        <p>{item.desc1}</p>
                        <p></p>
                      </div>

                      <div className="tbtext1">
                        <p>{item.desc2}</p>
                      </div>

                      <div className="hr">
                        <hr />
                      </div>
                    </div>
                    <div className="TB4">
                      <div>
                        <p className="duratext">{item.duration1}</p>
                        <p className="daystext">{item.duration2}</p>
                      </div>
                      <div>
                        <p className="duratext">{item.groupsize1}</p>
                        <p className="daystext">{item.groupsize2}</p>
                      </div>
                    </div>
                    <div className="hr">
                      <hr />
                    </div>
                    <div className="TB5">
                      <div>
                        <h3 className="tour_num">
                          <b>{item.amount}</b>
                        </h3>
                      </div>
                      <div>
                        <button type="submit" className="tourbutto">
                          <b>BOOK</b>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
export default  Home