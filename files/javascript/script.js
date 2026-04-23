const params = new URLSearchParams(window.location.search);
const country = params.get("name");

const data = {
  pakistan: {
    name: "Pakistan",
    capital: "Islamabad",
    UNstatus: "UN Member",
    UNjoinyear: "1947",
    Continent: "Asia",
    Image: "images/Pak.jpg",
    Flag: "images/flagpak.jpg",
    Papulation: "240 Million",
    Area: "881,913 kilo meters",
    GDP: "$340 Billion USD",
    description:
      "Nuclear Power, Beautiful Mountains, Culture or Hospitality and Developing Country",
  },

  turkey: {
    name: "Turkey",
    capital: "Ankara",
    UNstatus: "UN Member",
    UNjoinyear: "1945",
    Continent: "Asia and Europe (Transcontinental)",
    Image: "images/Turkey.jpg",
    Flag: "images/flag-turkey.jpg",
    Papulation: "85 Million",
    Area: "783,562 kilo meters",
    GDP: "$900 Billion USD",
    description:
      "A Historical country, located between Europe and Asia , Strong for Tourism, ",
  },

  uae: {
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    UNstatus: "UN Member",
    UNjoinyear: "1971",
    Continent: "Asia (Middle East)",
    Image: "images/UAE.jpg",
    Flag: "images/flag-United-Arab-Emirates.jpg",
    Papulation: "10 Million",
    Area: "83,600 kilo meters",
    GDP: "$500 Billion USD",
    description:
      "A first Developing Country , Famous for Tourism and Oil, Rich Country and Modern Cities",
  },
};
// Condition Check
if (country && data[country]) {
  document.getElementById("country-name").innerText = data[country].name;

  document.getElementById("country-data").innerHTML = `
        <h3>Capital: ${data[country].capital}</h3>
        <img src="${data[country].Image}" width="300">
        <h3>Flag:<h3>
        <img src="${data[country].Flag}" width="100">
        <h3>Papulation: ${data[country].Papulation}</h3>
        <h3>UNstatus: ${data[country].UNstatus}</h3>
        <h3>UNjoinyear: ${data[country].UNjoinyear}</h3>
        <h3>Continent: ${data[country].Continent}</h3>
        
        <h3>Area: ${data[country].Area}</h3>
        <h3>GDP: ${data[country].GDP}</h3>
        <p>${data[country].description}</p>
        
    `;
} else {
  document.getElementById("country-data").innerHTML =
    "<p>Country not found</p>";
}
