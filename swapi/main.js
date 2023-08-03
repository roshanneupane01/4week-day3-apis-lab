let buttonResident = document.getElementById("buttonGetResident");

let getAlderaanResidents = () => {
  axios
    .get("https://swapi.dev/api/planets/?search=Alderaan")
    .then((res) => {
      if (
        res.data.results.length > 0 &&
        res.data.results[0].residents.length > 0
      ) {
        let residents = res.data.results[0].residents;

        residents.forEach((resident) => {
          axios
            .get(resident)
            .then((res) => {
              let residentName = res.data.name;
              let element = document.createElement("h2");
              element.textContent = residentName;
              document.body.appendChild(element);
            })
            .catch((err) => {
              console.error("Error fetching resident:", err);
            });
        });
      } else {
        console.error("No residents found for Alderaan.");
      }
    })
    .catch((err) => {
      console.error("Error fetching information about Alderaan:", err);
    });
};

buttonResident.addEventListener("click", getAlderaanResidents);
