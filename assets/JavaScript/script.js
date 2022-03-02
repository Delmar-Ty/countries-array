function myFunction() {
    var selectContinent = ['Europe', 'Asia', 'North America'];
    var arrEurope = ['England', 'France', 'Germany', 'Ireland', 'Poland'];
    var arrAsia = ['India', 'China', 'North Korea', 'Japan', 'Russia'];
    var arrNAmerica = ['United States', 'Mexico', 'Canada'];
    var selectOptions = document.getElementById("continents");
    var displayCountries = document.getElementById("countries");
    document.getElementById("countries").innerHTML = "";

    console.log(selectOptions.value);

    if (selectOptions.value === "e") {
        for (i = 0; i<arrEurope.length; i++) {
            var soptions = document.createElement('option');
            soptions.innerHTML = arrEurope[i];
            soptions.value = arrEurope[i];
            displayCountries.appendChild(soptions);
        }
    } else if (selectOptions.value === "a") {
        for (i = 0; i<arrAsia.length; i++) {
            var soptions = document.createElement('option');
            soptions.innerHTML = arrAsia[i];
            soptions.value = arrAsia[i];
            displayCountries.appendChild(soptions);
        }
    } else {
        for (i = 0; i<arrNAmerica.length; i++) {
            var soptions = document.createElement('option');
            soptions.innerHTML = arrNAmerica[i];
            soptions.value = arrNAmerica[i];
            displayCountries.appendChild(soptions);
        }
    }
}