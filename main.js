  
  
  
  $("#all-countries-btn").click(function (){
    console.log("goodbye")
      axios.get("https://restcountries.eu/rest/v2/all")
      .then((response)=>{
          console.log(response.data);
          $("#list").html("<ul id='the-ul'></ul>")
            response.data.forEach((eachCountry)=> {
              $("#list").append(`
              <li>${eachCountry.name}
              </li>`);
            });  
          })
      .catch((err)=>{
            console.log(err)
      })

    })


    // =--=-=-=-=-=-=-=-=-=-=-= search for country by name starts =-=--=-=-=-=-=-=-=-=
const restCountriesApi = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/name/'
});

function getCountryInfo(theName) {
  restCountriesApi.get(theName)
    .then(responseFromAPI => {
      console.log('Response from API is: ', responseFromAPI.data);
      $("#singleCountry").append(`${responseFromAPI.data[0].name}`);
    })
    .catch(err => {
      $("#singleCountry").append(`This is not a country`);
      console.log('Error is: ', err);
    })
}

document.getElementById("theButton").onclick = function () {
  const country = document.getElementById("theInput").value;
  getCountryInfo(country);
}


// =-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=search country by name ENDS =-=--=-=-=-==--=-=

const capitalCountryAPI = axios.create({
  baseURL: "https://restcountries.eu/rest/v2/capital/"
});

function getCountryInfo(theName) {
  capitalCountryAPI
    .get(theName)
    .then(responseFromAPI => {
      console.log("Response from API is: ", responseFromAPI.data);
      $("#capitalCountry").append(`${responseFromAPI.data[0].name}`);
    })
    .catch(err => {
      $("#capitalCountry").append(`This is not a country`);
      console.log("Error is: ", err);
    });
}

document.getElementById("secondButton").onclick = function() {
  const country = document.getElementById("secondInput").value;
  getCountryInfo(country);
};

