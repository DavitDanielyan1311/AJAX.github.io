document.addEventListener("DOMContentLoaded", function () {
  const countryListDiv = document.getElementById("country-list");

  const data = {
    countries: [
      { name: "USA", code: "usa" },
      { name: "Canada", code: "can" },
      //   { name: "Mexico", code: "mex" },
      //   { name: "United Kingdom", code: "uk" },
      //   { name: "Germany", code: "ger" },
      { name: "France", code: "fra" },
      //   { name: "Japan", code: "jpn" },
      { name: "Australia", code: "aus" },
    ],
    cities: {
      usa: [
        {
          name: "New York",
          imageUrl:
            "https://t3.ftcdn.net/jpg/02/09/70/56/240_F_209705645_b78HGJI1i1mxqLwMYA7z1m3VvCxgxJFO.jpg",
        },
        {
          name: "Los Angeles",
          imageUrl:
            "https://t4.ftcdn.net/jpg/00/79/19/59/240_F_79195916_9NOsepdkxYHXDZFz9TO4nnsrZ376s0ks.jpg",
        },
        {
          name: "Chicago",
          imageUrl:
            "https://t3.ftcdn.net/jpg/03/16/40/70/240_F_316407040_LhvrRDQvQyViUQjIqNsGZZoG25IhV2hg.jpg",
        },
        {
          name: "Houston",
          imageUrl:
            "https://t3.ftcdn.net/jpg/04/84/52/04/240_F_484520429_Hoy6sYg5i7WgtwM0Uz4bzAi3ESLjmGvE.jpg",
        },
        {
          name: "Phoenix",
          imageUrl:
            "https://t3.ftcdn.net/jpg/02/01/62/90/240_F_201629096_51a2joFYyLyAjht3REBp3y8CayCgD0V9.jpg",
        },
      ],
      can: [
        {
          name: "Toronto",
          imageUrl:
            "https://t3.ftcdn.net/jpg/00/46/85/30/240_F_46853057_tbt9SP7rZMCLNfZArxGGGBhc4F6YmRQV.jpg",
        },
        {
          name: "Vancouver",
          imageUrl:
            "https://t3.ftcdn.net/jpg/00/85/17/66/240_F_85176617_O4jvaPmOfedd3hVL1w75dIb0fdGk1TMG.jpg",
        },
        {
          name: "Montreal",
          imageUrl:
            "https://t4.ftcdn.net/jpg/01/62/09/37/240_F_162093714_Rmh5O5abXdqTb7zSqlQhkCkzpQVVT0El.jpg",
        },
        {
          name: "Calgary",
          imageUrl:
            "https://t3.ftcdn.net/jpg/04/52/81/90/240_F_452819032_1PGBgGk56sVmK0Q1aSzSPAY1xR9Q6QqJ.jpg",
        },
        {
          name: "Ottawa",
          imageUrl:
            "https://t3.ftcdn.net/jpg/01/33/96/82/240_F_133968281_3HfTuTZXLPH8BqFRP3eSrep64RzEpDkj.jpg",
        },
      ],
      //   mex: [
      //     { name: "Mexico City", imageUrl: "images/mexico_city.jpg" },
      //     { name: "Guadalajara", imageUrl: "images/guadalajara.jpg" },
      //     { name: "Monterrey", imageUrl: "images/monterrey.jpg" },
      //     { name: "Puebla", imageUrl: "images/puebla.jpg" },
      //     { name: "Tijuana", imageUrl: "images/tijuana.jpg" },
      //   ],
      //   uk: [
      //     { name: "London", imageUrl: "images/london.jpg" },
      //     { name: "Birmingham", imageUrl: "images/birmingham.jpg" },
      //     { name: "Manchester", imageUrl: "images/manchester.jpg" },
      //     { name: "Glasgow", imageUrl: "images/glasgow.jpg" },
      //     { name: "Liverpool", imageUrl: "images/liverpool.jpg" },
      //   ],
      //   ger: [
      //     { name: "Berlin", imageUrl: "images/berlin.jpg" },
      //     { name: "Hamburg", imageUrl: "images/hamburg.jpg" },
      //     { name: "Munich", imageUrl: "images/munich.jpg" },
      //     { name: "Cologne", imageUrl: "images/cologne.jpg" },
      //     { name: "Frankfurt", imageUrl: "images/frankfurt.jpg" },
      //   ],
      fra: [
        {
          name: "Paris",
          imageUrl:
            "https://t3.ftcdn.net/jpg/02/45/70/70/240_F_245707051_nAlkopV8DCqIUJMLnautG2pBCQi6lkwO.jpg",
        },
        {
          name: "Marseille",
          imageUrl:
            "https://t3.ftcdn.net/jpg/01/13/17/90/240_F_113179007_goDhNzqsYy0DfqqtJN1hLvfNBTc2RkRx.jpg",
        },
        {
          name: "Lyon",
          imageUrl:
            "https://t4.ftcdn.net/jpg/03/31/41/97/240_F_331419743_zIWejxZbVyNTMFu6uIJYrt7DoW9oj1jY.jpg",
        },
        {
          name: "Toulouse",
          imageUrl:
            "https://t3.ftcdn.net/jpg/01/23/97/08/240_F_123970857_Yp7OwtHKBpmOZu3iqxbva2qc2nKwD2zc.jpg",
        },
        {
          name: "Nice",
          imageUrl:
            "https://t4.ftcdn.net/jpg/02/28/19/61/240_F_228196124_kyI2eLkbqYCTFJJ8wGJtM3fg84iveRNF.jpg",
        },
      ],
      //   jpn: [
      //     { name: "Tokyo", imageUrl: "images/tokyo.jpg" },
      //     { name: "Osaka", imageUrl: "images/osaka.jpg" },
      //     { name: "Nagoya", imageUrl: "images/nagoya.jpg" },
      //     { name: "Sapporo", imageUrl: "images/sapporo.jpg" },
      //     { name: "Fukuoka", imageUrl: "images/fukuoka.jpg" },
      //   ],
      aus: [
        {
          name: "Sydney",
          imageUrl:
            "https://t3.ftcdn.net/jpg/01/38/93/78/240_F_138937885_UKZZyaqTBzwdyTY9SlH6cdNZPoFIXZor.jpg",
        },
        {
          name: "Melbourne",
          imageUrl:
            "https://t3.ftcdn.net/jpg/00/78/01/40/240_F_78014018_OsiTRlU8l7ytgxLWx1QtmnCa2Jv71ZjG.jpg",
        },
        {
          name: "Brisbane",
          imageUrl:
            "https://t3.ftcdn.net/jpg/01/92/46/46/240_F_192464679_8bEPfN2lcy8C2wJzXQQh03yDuvL2DmHB.jpg",
        },
        {
          name: "Perth",
          imageUrl:
            "https://t4.ftcdn.net/jpg/01/13/58/85/240_F_113588527_aXVZ7wbh3A0GtKC3OWJ3q8lb9mjPUgpu.jpg",
        },
        {
          name: "Adelaide",
          imageUrl:
            "https://t3.ftcdn.net/jpg/03/17/92/64/240_F_317926489_eEBdDs9jUq41qo4jGlEvr7F1rKueT4jx.jpg",
        },
      ],
    },
  };

  function fetchCountries(callback) {
    setTimeout(() => {
      mockAjax("data/countries.json", callback);
    }, 500);
  }

  function fetchCities(countryCode, callback) {
    setTimeout(() => {
      mockAjax(`data/cities_${countryCode}.json`, callback);
    }, 500);
  }

  function mockAjax(url, callback) {
    if (url === "data/countries.json") {
      callback(data.countries);
    } else {
      const countryCode = url.match(/cities_(\w+)\.json/)[1];
      callback(data.cities[countryCode]);
    }
  }

  fetchCountries(function (countries) {
    displayCountries(countries);
  });

  function displayCountries(countries) {
    countries.forEach((country) => {
      const countryDiv = document.createElement("div");
      countryDiv.className = "country country-list-item";
      countryDiv.textContent = country.name;
      countryDiv.addEventListener("click", () =>
        loadCities(country.code, countryDiv)
      );
      countryListDiv.appendChild(countryDiv);
    });
  }

  function loadCities(countryCode, countryDiv) {
    const openedCountry = document.querySelector(".country.open");
    if (openedCountry && openedCountry !== countryDiv) {
      const openCityList = openedCountry.querySelector(".city-list");
      if (openCityList) {
        openedCountry.removeChild(openCityList);
        openedCountry.classList.remove("open");
      }
    }

    if (countryDiv.classList.contains("open")) {
      const cityList = countryDiv.querySelector(".city-list");
      if (cityList) {
        countryDiv.removeChild(cityList);
      }
      countryDiv.classList.remove("open");
    } else {
      fetchCities(countryCode, function (cities) {
        displayCities(cities, countryDiv);
        countryDiv.classList.add("open");
      });
    }
  }

  function displayCities(cities, countryDiv) {
    const existingCityList = countryDiv.querySelector(".city-list");
    if (existingCityList) {
      countryDiv.removeChild(existingCityList);
    }

    const cityListDiv = document.createElement("div");
    cityListDiv.className = "city-list";
    cities.forEach((city) => {
      const cityDiv = document.createElement("div");
      cityDiv.className = "city-list-item";
      cityDiv.textContent = city.name;

      const cityImg = document.createElement("img");
      cityImg.src = city.imageUrl;
      cityImg.alt = city.name;
      cityImg.style.width = "100px"; // Adjust the size as needed
      cityImg.style.height = "100px"; // Adjust the size as needed
      cityDiv.appendChild(cityImg);

      cityListDiv.appendChild(cityDiv);
    });
    countryDiv.appendChild(cityListDiv);
  }
});
