const params = new URLSearchParams(window.location.search);
const country = params.get("name");

const data = {
  Pakistan: {
    name: "Pakistan",
    capital: "Islamabad",
    UNstatus: "UN Member",
    UNjoinyear: "1947",
    Continent: "Asia",
    Population: "240 Million",
    Area: "881,913 kilo meters",
    GDP: "$340 Billion USD",
    description:
      "Nuclear Power, Beautiful Mountains, Culture or Hospitality and Developing Country",
  },

  Turkey: {
    name: "Turkey",
    capital: "Ankara",
    UNstatus: "UN Member",
    UNjoinyear: "1945",
    Continent: "Asia and Europe (Transcontinental)",
    Population: "85 Million",
    Area: "783,562 kilo meters",
    GDP: "$900 Billion USD",
    description:
      "A Historical country, located between Europe and Asia , Strong for Tourism, ",
  },

  UAE: {
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    UNstatus: "UN Member",
    UNjoinyear: "1971",
    Continent: "Asia (Middle East)",
    Population: "10 Million",
    Area: "83,600 kilo meters",
    GDP: "$500 Billion USD",
    description:
      "A first Developing Country , Famous for Tourism and Oil, Rich Country and Modern Cities",
  },
};
