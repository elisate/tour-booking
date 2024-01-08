import React from "react";
import "./Tour.css";
import Cardlist from "./Cardlist";
import { Link } from "react-router-dom";
import fetching from "../API/fetching";
import { useState, useEffect } from "react";
function Tour() {
  const [listcard, setListcard] = useState([]);
  useEffect(() => {
    const fetchapi = async () => {
      try {
        const response = await fetching.get(
          "https://holiday-planner-4lnj.onrender.com/api/v1/tour"
        );
        setListcard(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data.message);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(listcard);
          console.log("errorr");
        }
      }
    };
    fetchapi();
  }, []);

  return (
    <>
      <section className="background_image">
        <div className="content">
          <h1 className="conte">Tours List</h1>
        </div>
      </section>
      <section className="second">
        <div className="tour_container">
          <div className="tour_a">
            <div className="tour_a1">
              <input type="text" value="Sort by:" className="select0" />
            </div>
            <div className="tour_a2">
              <select id="release date" name="release date" className="select1">
                <option value="">Tour Date</option>
                <option value="">Title</option>
                <option value="">Price</option>
                <option value="">Popularity</option>
                <div></div>
                <option value="">Rating</option>
                <option value=""> Duration</option>
              </select>
            </div>
            <div className="tour_a3">
              <select id="sort by" name="sort by" className="select2">
                <option value="">Ascending</option>
                <option value="">Descending</option>
              </select>
            </div>
          </div>
          <div className="JUST_hold">
            {listcard.map((item) => (
              <div className="tourC_subb">
                <div className="TCcard2">
                  <div>
                    <div className="JUST1">
                      <img src={item.backdropImage} className="TB_innovation" />
                    </div>
                    <div className="JUST2">
                      <p className="textb1">{item.Title}</p>
                    </div>
                  </div>
                </div>
                <div className="TB2">
                  <div className="TB3">
                    <div className="tbtext2">
                      <p>{item.Description}</p>
                      <p></p>
                    </div>

                    <div className="tbtext1">
                      <p>{item.description_b}</p>
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
                        <Link to={`/Tour_page/${item.id}`}>
                          <b>BOOK</b>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form>
          <div className="tourD_holder">
            <div className="tour_d">FIND YOUR TOUR</div>
            <div>
              <input title="text" placeholder="Search Tour" className="texd" />
            </div>
            <div>
              <input title="text" name="text" className="texd" />
            </div>
            <div>
              <select id="date" className="texd">
                <option value="Month" className="T">
                  Month
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
            <div>
              <select id="date" className="texd">
                <option value="Any" className="T">
                  Any
                </option>
                <option value="2-4 Day tour" className="T">
                  2-4 Day Tour
                </option>
                <option value="5-7 Day Tour" className="T">
                  5-7 Day Tour
                </option>
                <option value="7 + Day Tour" className="T">
                  7 + Day Tour
                </option>
              </select>
            </div>

            <div className="holder_numbertour">
              <div>
                <p>
                  <b>Min Price</b>
                </p>
                <p>
                  <input
                    type="number"
                    placeholder="1"
                    className="texd1"
                    holder_numbertour1
                  />
                </p>
              </div>
              <div>
                <p>
                  <b>Max Price</b>
                </p>
                <p>
                  <input
                    type="number"
                    placeholder="100"
                    className="texd1"
                    holder_numbertour1
                  />
                </p>
              </div>
            </div>

            <div className="textd3">
              <label>
                <input
                  type="checkbox"
                  name="culture"
                  value="Cultural"
                  className="texd2"
                />
                Cultural
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="culture"
                  value="Adventure"
                  className="texd2"
                />
                Adventure
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="culture"
                  value="Historical"
                  className="texd2"
                />
                Historical
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="culture"
                  value="Seaside"
                  className="texd2"
                />
                Seaside
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="culture"
                  value="Discovery"
                  className="texd2"
                />
                Discovery
              </label>
              <br></br>
            </div>
            <div>
              <button type="submit" className="Butto_tourist">
                FIND NOW
              </button>
            </div>
          </div>
        </form>

        <div className="JO"></div>

        <div className="tour-text">
          <div className="tour-text1">
            <b>WHY BOOK WITH US?</b>
          </div>
          <div className="tour-text2">
            <p>Best Price Guarantee</p>
            <p>Customer care available 24/7</p>
            <p>Free Travel Insureance</p>
            <p>Hand-picked Tours & Activities</p>
          </div>
        </div>
        <div className="endtourpe">
          <div className="end1">
            <b>GET A QUESTION?</b>
          </div>
          <div className="end2">
            <p>Do not hesitage to give us a call. We are an</p>
            <p>expert team and we are happy to talk to</p>
            <p>you.</p>
          </div>
          <div>
            <p>holidayplanners@gmail.com</p>
          </div>
          <div>
            <p>+123 456 7890</p>
          </div>
        </div>
      </section>
    </>
  );
}
export default Tour;
