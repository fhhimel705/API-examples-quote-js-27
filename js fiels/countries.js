const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      const allCountry = document.getElementById("all-country");
      //   for (const countryName of data) {
      //      allCountry.innerHTML = `
      //      <h4> country name : ${countryName.name.common}</h4>
      //      `;
      //     console.log(countryName.name.common);
      //   }
      //   console.log(data);
      data.forEach((country) => {
        console.log(country);
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("countryStyle");
        countryDiv.innerHTML = `
        <h3> Name : ${country.name.common} </h3>
        <h5> Capital : ${
          country.capital ? country.capital[0] : "No capital"
        } </h5>
        <button id='details-btn' onclick = 'countryDetails("${country.cca2}")'> Details </button>
        `;
        allCountry.appendChild(countryDiv);
      });
    });
};
loadCountries();
const countryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const countryDetails = document.getElementById("country-details");
        countryDetails.innerHTML = '';
        const details = document.createElement("div");
        details.classList.add('country-details');
        details.innerHTML = `
        <div>
        <h2> Name : ${data[0].name.common} </h2>
        <h2> Population : ${data[0].population} </h2>
        <h2> Region : ${data[0].region} </h2>
        <h2> Week Start : ${data[0].startOfWeek} </h2>
        </div>
        <img width='30%' src='${data[0].flags.png}'  >

        `;
        countryDetails.appendChild(details);

    })
    
};
// https://restcountries.com/v3.1/alpha/bd
