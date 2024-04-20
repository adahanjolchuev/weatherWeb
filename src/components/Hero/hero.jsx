import React, { useEffect, useState } from "react";
import umbrella from "../../img/umbrellaPng.png";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaMap } from "react-icons/fa";
import sitting from "../../img/sittnigv.png";
import "./hero.css";
import { key } from "../../key";
import axios from "axios";
import { MdWaterDrop } from "react-icons/md";
import { FaTemperatureHalf } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { TbUvIndex } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import sitting1 from "../../img/sitting.png";

const Hero = () => {
  const [data, setData] = useState("");
  const [data1, setData1] = useState("");
  const [eror, setEror] = useState("");
  const [country, setCountry] = useState("Bishkek");
  const [week, setWeek] = useState("");
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state);
  const { theme } = useSelector((state) => state);
  const [themeDark, setThemeDark] = useState(
    localStorage.setItem("darkMode", JSON.stringify(theme))
  );
  const { t, i18n } = useTranslation();

  const [todayBlock, setTodayBlock] = useState(Array(23).fill(null));
  const [weekBlock, setWeekBlock] = useState(Array(7).fill(null));

  const [lng, setLng] = useState(
    JSON.parse(localStorage.getItem("language")) || "en"
  );

  const daysOfWeek = [
    `${t("today")}`,
    `${t("tue")}`,
    `${t("wed")}`,
    `${t("thu")}`,
    `${t("fri")}`,
    `${t("sat")}`,
    `${t("sun")}`,
  ];

  async function ForeCast() {
    try {
      let data = await axios(
        `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${country}&days=7&aqi=yes&lang=${lng}`
      );
      setData(data.data);
      setEror("");
      setWeek(data.data.forecast);
      setData1(data.data.forecast.forecastday[0].hour);
    } catch (error) {
      setEror(error.message);
    }
  }

  function getChangeLng() {
    if (value === "en") {
      return i18n.changeLanguage("en");
    } else if (value === "ru") {
      return i18n.changeLanguage("ru");
    }
  }

  useEffect(() => {
    getChangeLng();
    setTodayBlock(data1);
    setWeekBlock(week);
    ForeCast();
    localStorage.setItem("language", JSON.stringify(lng));
    dispatch({ type: "ADD_VALUE", payload: lng });
  }, [value, weekBlock, todayBlock, lng]);

  return (
    <body>
      <div
        style={{
          background: theme ? "rgb(4 ,4 ,37)" : "white",
        }}
        id="hero"
      >
        <div className="container">
          <div className="hero">
            <div
              style={{
                background: theme ? "rgb(21, 21, 49)" : "rgb(237, 237, 237)",
                color: theme ? "#e7d8d8" : "black",
              }}
              className="menu"
            >
              <img src={umbrella} alt="photo" />
              <div className="menudiv">
                <TiWeatherPartlySunny className="icon" />
                <p>{t("weatherPmenu")}</p>
              </div>
              <div className="menudiv">
                <TfiMenuAlt className="icon" />
                <p>{t("cityPmenu")}</p>
              </div>
              <div className="menudiv">
                <FaMap className="icon" />
                <p>{t("mapPmenu")}</p>
              </div>
              <div className="menudiv">
                <img src={theme ? sitting : sitting1} alt="" />
                <p>{t("sittingPmenu")}</p>
              </div>
            </div>
            <div className="home1">
              <header>
                <input
                  style={{
                    background: theme
                      ? "rgb(21, 21, 49)"
                      : "rgb(237, 237, 237)",
                    color: theme ? "white" : "black",
                  }}
                  onChange={(e) => setCountry(e.target.value)}
                  className="search"
                  type="search"
                  placeholder={t("searchPlaceholder")}
                  name="country"
                />
                <button
                  style={{
                    background: theme
                      ? "rgb(21, 21, 49)"
                      : "rgb(237, 237, 237)",
                    color: theme ? "white" : "black",
                  }}
                  onClick={() => ForeCast()}
                >
                  {t("searchBtn")}
                </button>
              </header>
              <div className="home">
                <div>
                  {data.length === 0 || eror ? (
                    <h1 className="empty">{eror}</h1>
                  ) : (
                    <div className="currentWeather">
                      <div
                        style={{
                          color: theme ? "white" : "black",
                        }}
                        className="oneCountry"
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                          }}
                        >
                          <h1>{data.location && data.location.name}</h1>
                          <h3>{data.location && data.location.region}</h3>
                          <h3>{data.location && data.location.country}</h3>

                          <p
                            style={{
                              color: theme ? "rgb(165, 161, 161)" : "black",
                            }}
                          >
                            {t("chanceOfrain").concat(" : ")}
                            {data.current && data.current.cloud}%
                          </p>
                        </div>
                        <h2>{data.current && data.current.temp_c}°</h2>
                      </div>
                      <img
                        src={data.current && data.current.condition.icon}
                        alt=""
                      />
                    </div>
                  )}
                </div>
                <div
                  style={{
                    background: theme
                      ? "rgb(21, 21, 49)"
                      : "rgb(237, 237, 237)",
                    color: theme ? "rgb(218, 203, 203)" : "black",
                  }}
                  className="todayForecast"
                >
                  <h5>{t("todayForcast")}</h5>
                  <div className="todayblocks">
                    {todayBlock &&
                      todayBlock.map((hourData, index) => (
                        <div className="todayblock" key={index}>
                          <h3>{hourData && hourData.time.slice(10)}</h3>
                          <img
                            src={hourData && hourData.condition.icon}
                            alt=""
                          />
                          <h3>{hourData && hourData.temp_c}°</h3>
                        </div>
                      ))}
                  </div>
                </div>
                <div
                  style={{
                    background: theme
                      ? "rgb(21, 21, 49)"
                      : "rgb(237, 237, 237)",
                  }}
                  className="air"
                >
                  <div
                    style={{
                      color: theme ? "#bab3b3" : "black",
                    }}
                    className="airDisplay"
                  >
                    <h4>{t("airCondition")}</h4>
                    <button>{t("seeMore")}</button>
                  </div>
                  <div className="airDiv">
                    <div
                      style={{
                        color: theme ? "rgb(176, 163, 163)" : "black",
                      }}
                      className="airDivter"
                    >
                      <div className="air_condition">
                        <p>
                          <FaTemperatureHalf />
                        </p>
                        <span
                          style={{
                            color: theme ? "white" : "black",
                          }}
                        >
                          <h2
                            style={{
                              color: theme ? "rgb(176, 163, 163)" : "black",
                            }}
                          >
                            {t("realFeel")}
                          </h2>
                          <h4>{data.current && data.current.feelslike_c}°</h4>
                        </span>
                      </div>
                      <div className="air_condition">
                        <p>
                          <MdWaterDrop />
                        </p>
                        <span
                          style={{
                            color: theme ? "white" : "black",
                          }}
                        >
                          <h2
                            style={{
                              color: theme ? "rgb(176, 163, 163)" : "black",
                            }}
                          >
                            {t("chanceOfrain").toUpperCase()}
                          </h2>
                          <h4>{data.current && data.current.temp_c}%</h4>
                        </span>
                      </div>
                    </div>
                    <div
                      style={{
                        color: theme ? "rgb(176, 163, 163)" : "black",
                      }}
                      className="airDivter"
                    >
                      <div className="air_condition">
                        <p>
                          <FaWind />
                        </p>
                        <span
                          style={{
                            color: theme ? "white" : "black",
                          }}
                        >
                          <h2
                            style={{
                              color: theme ? "rgb(176, 163, 163)" : "black",
                            }}
                          >
                            {t("wind")}
                          </h2>
                          <h4>{data.current && data.current.wind_kph}km/h</h4>
                        </span>
                      </div>
                      <div className="air_condition">
                        <p>
                          <TbUvIndex />
                        </p>
                        <span
                          style={{
                            color: theme ? "white" : "black",
                          }}
                        >
                          <h2
                            style={{
                              color: theme ? "rgb(176, 163, 163)" : "black",
                            }}
                          >
                            {t("uvIndex")}
                          </h2>
                          <h4>{data.current && data.current.uv}</h4>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Week">
              <div className="select">
                <select
                  value={lng}
                  onChange={(e) => {
                    setLng(e.target.value);
                  }}
                >
                  <option value={"en"}>English</option>
                  <option value={"ru"}>Русский</option>
                </select>
                <button
                  onClick={() => {
                    dispatch({
                      type: "THEME",
                      theme: theme ? "light" : "dark",
                    });
                  }}
                >
                  {theme ? `${t("dark")}` : `${t("light")}`}
                </button>
              </div>

              <div
                style={{
                  background: theme ? "rgb(21, 21, 49)" : "rgb(237, 237, 237) ",
                  color: theme ? "rgb(176, 163, 163)" : "black",
                }}
                className="weekDiv"
              >
                <h1>{t("sevenDayForecast")}</h1>
                <div className="weekblocks">
                  {weekBlock.forecastday &&
                    weekBlock.forecastday.map((weekData, index) => (
                      <div className="weekblock" key={index}>
                        <h4>{daysOfWeek[index]}</h4>
                        <div className="weektext">
                          <img
                            src={weekData && weekData.day.condition.icon}
                            alt=""
                          />
                          <h4>{weekData && weekData.day.condition.text}</h4>
                        </div>
                        <h3
                          style={{
                            color: theme ? "rgb(224, 209, 209)" : "black",
                          }}
                        >
                          {weekData && weekData.day.avgtemp_c}°
                        </h3>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Hero;
