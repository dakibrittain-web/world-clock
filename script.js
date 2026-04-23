let now = new Date();
let selectedTimeZone = "";

function updateClocks() {
    now = new Date();
    document.getElementById("amsterdam-time").innerHTML = new Intl.DateTimeFormat("en-GB", {
     timeZone: "Europe/Amsterdam",
     hour: "2-digit",
     minute: "2-digit",
     second: "2-digit"    
    }).format(now);
    document.getElementById("amsterdam-date").innerHTML = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Europe/Amsterdam",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
     }).format(now);

    document.getElementById("colombo-time").innerHTML = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(now);
    document.getElementById("colombo-date").innerHTML = new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Colombo",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(now);

    if (selectedTimeZone) {
    document.getElementById("selected-city-name").innerHTML = selectedTimeZone;
    document.getElementById("selected-time").innerHTML = new Intl.DateTimeFormat("en-GB", {
        timeZone: selectedTimeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(now);
    document.getElementById("selected-date").innerHTML = new Intl.DateTimeFormat("en-GB", {
        timeZone: selectedTimeZone,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(now); 

    }
}

document.getElementById("city-select").addEventListener("change", function() {
    let timeZone = this.value;
    selectedTimeZone = timeZone
    console.log(timeZone);
    document.getElementById("selected-clock").style.display = "block";
    document.getElementById("selected-city-name").innerHTML = this.value;
    document.getElementById("selected-time").innerHTML = new Intl.DateTimeFormat("en-GB", {
        timeZone: selectedTimeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(now);
    document.getElementById("selected-date").innerHTML = new Intl.DateTimeFormat("en-GB", {
        timeZone: selectedTimeZone,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }).format(now); 

})

setInterval(updateClocks, 1000);
updateClocks();