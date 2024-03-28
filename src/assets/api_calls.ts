const lon = "15.432490";
const lat = "60.485352"

export const getMeterologicalForecast = async () => 
    await fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`)
    .then(response => response.json())
    .then(data => { return data });