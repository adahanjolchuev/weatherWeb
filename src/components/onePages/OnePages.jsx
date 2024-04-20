import React, { useEffect, useState } from "react";
import "./onePages.css";
import umbrella from "../../img/umbrellaPng.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function OnePages() {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const { value } = useSelector((state) => state);
  const theme = useSelector((state) => state.theme);
  const { t, i18n } = useTranslation();

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      nav("/Weather");
    }, 2000);
  };

  function getChangeLng() {
    if (value === "en") {
      return i18n.changeLanguage("en");
    } else if (value === "ru") {
      return i18n.changeLanguage("ru");
    }
  }

  useEffect(() => {
    getChangeLng();
  }, [value]);

  return (
    <div
      style={{
        background: theme ? "rgb(4, 4, 27)" : "white",
        color: theme ? "white" : "black",
      }}
      id="onePages"
    >
      <div className="onePages">
        <div
          style={{
            background: theme ? "rgb(21, 21, 49)" : "rgb(237, 237, 237)",
            color: theme ? "black" : "white",
          }}
          className="divImg"
        >
          <img src={umbrella} alt="" />
        </div>
        <div className="onePagesRight">
          <img src={umbrella} alt="" />
          <div className="text">
            <h2>{t("Breeze")}</h2>
            <p>{t("weatherApp")}</p>
          </div>
          <div
            className="buttonLoader"
            onClick={handleButtonClick}
            disabled={loading}
          >
            {loading ? `${t("loader")}` : `${t("getStarted")}`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnePages;
