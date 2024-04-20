import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        Breeze: "Breeze",
        weatherApp: "Weather App",
        getStarted: "Get started",
        loader: "loading...",
        searchBtn: "search",
        searchPlaceholder: "Search for cities...",
        /////////////////
        weatherPmenu: "Weather",
        cityPmenu: "Cities",
        mapPmenu: "Map",
        sittingPmenu: "Sittings",
        ///////////////////////////
        chanceOfrain: "chance of rain",
        /////////////
        seeMore: "see more",
        todayForcast: "TODAY'S FORECAST",
        airCondition: "AIR CONDITIONS",
        realFeel: "REAL FEEL",
        wind: "WIND",
        uvIndex: "UV index",
        dark: "dark",
        light: "light",
        sevenDayForecast: "7-day forecast",
        today: "Today",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat",
        sun: "Sun",
      },
    },
    ru: {
      translation: {
        Breeze: "Ветерок",
        weatherApp: "Приложение погоды",
        getStarted: "Начинать",
        loader: "загрузска...",
        searchBtn: "поиск",
        searchPlaceholder: "Искать города...",
        weatherPmenu: "Погода",
        cityPmenu: "Города",
        mapPmenu: "Карта",
        sittingPmenu: "Настройка",
        chanceOfrain: "вероятность дождя",
        todayForcast: "ПРОГНОЗ НА СЕГОДНЯ",
        airCondition: "УСЛОВИЯ ВОЗДУХА ",
        realFeel: "ТЕМПЕРАТУРА ПО ОЩУШЕНИЯМ",
        seeMore: "узнать больше",
        wind: "ВЕТЕР",
        uvIndex: " УФ-излучения",
        dark: "темный",
        light: "светлый",
        sevenDayForecast: "Прогноз на 7 дней",
        today: "Сегодня",
        tue: "Вт",
        wed: "Ср",
        thu: "Чт",
        fri: "Пт",
        sat: "Сб",
        sun: "Вс",
      },
    },
  },
  lng: "en",
  fallbacklng: "en",
});

export default i18next;
