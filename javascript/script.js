const params = new URLSearchParams(window.location.search);
const country = params.get("name");

const data = {
  pakistan: {
    name: "Pakistan",
    capital: "Islamabad",
    UNstatus: "UN Member",
    UNjoinyear: "1947",
    Continent: "Asia",
    Population: "240 Million",
    Area: "881,913 km",
  },
};
