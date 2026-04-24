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
    Population: "240 Million",
    Area: "881,913 kilo meters",
    map: "https://www.google.com/maps?q=Pakistan&output=embed",
    GDP: "$340 Billion USD",
    description:
      "Nuclear Power, Beautiful Mountains, Culture or Hospitality and Developing Country.",
  },

  turkey: {
    name: "Turkey",
    capital: "Ankara",
    UNstatus: "UN Member",
    UNjoinyear: "1945",
    Continent: "Asia and Europe (Transcontinental)",
    Image: "images/Turkey.jpg",
    Flag: "images/flag-turkey.jpg",
    Population: "85 Million",
    Area: "783,562 kilo meters",
    map: "https://www.google.com/maps?q=Turkey&output=embed",
    GDP: "$900 Billion USD",
    description:
      "A Historical country, located between Europe and Asia , Strong for Tourism. ",
  },

  uae: {
    name: "United Arab Emirates",
    capital: "Abu Dhabi",
    UNstatus: "UN Member",
    UNjoinyear: "1971",
    Continent: "Asia (Middle East)",
    Image: "images/UAE.jpg",
    Flag: "images/flag-United-Arab-Emirates.jpg",
    Population: "10 Million",
    Area: "83,600 kilo meters",
    map: "https://www.google.com/maps?q=UAE&output=embed",
    GDP: "$500 Billion USD",
    description:
      "A first Developing Country , Famous for Tourism and Oil, Rich Country and Modern Cities.",
  },
};
// Condition Check
if (country && data[country]) {
  document.getElementById("country-name").innerText = data[country].name;

  document.getElementById("country-data").innerHTML = `
    <div class="country-container">

        <h2>${data[country].name}</h2>

        <img class="main-img" src="${data[country].Image}">

        <div class="info">
            <p><b>Capital:</b> ${data[country].capital}</p>
            <p><b>UNstatus:</b> ${data[country].UNstatus}</p>
            <p><b>UNjoinyear:</b> ${data[country].UNjoinyear}</p>
            <p><b>Continent:</b> ${data[country].Continent}</p>
            <p><b>Area:</b> ${data[country].Area}</p>
            <p><b>GDP:</b> ${data[country].GDP}</p>
            <p><b>Population:</b> ${data[country].Population}</p>
            <p><b>Description:</b> ${data[country].description}</p>
        </div>

        <div class="flag">
            <h3>Flag</h3>
            <img src="${data[country].Flag}">
        </div>

        <div class="map">
            <h3>Map</h3>
            <iframe src="${data[country].map}"></iframe>
        </div>

    </div>
`;
} else {
  document.getElementById("country-data").innerHTML =
    "<p>Country not found</p>";
}
