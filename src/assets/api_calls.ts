import { RESROBOT_API_KEY } from "./apikeys";
import { VASAGATAN_KN_BORLANGE_ID, VASAPARKEN_RESECENTRUM_ID } from "./station_ids";

const lon = "15.432490";
const lat = "60.485352"

export const getMeterologicalForecast = async () => 
    await fetch(`https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${lon}/lat/${lat}/data.json`)
    .then(response => response.json())
    .then(data => { return data });

export const GetDeparturesVasagatan = async () => 
    await fetch(`https://api.resrobot.se/v2.1/departureBoard?id=${VASAGATAN_KN_BORLANGE_ID}&format=json&accessId=${RESROBOT_API_KEY}`)
    .then(response => response.json())
    .then(data => { return data });

export const GetDeparturesVasaparken = async () => 
    await fetch(`https://api.resrobot.se/v2.1/departureBoard?id=${VASAPARKEN_RESECENTRUM_ID}&format=json&accessId=${RESROBOT_API_KEY}`)
    .then(response => response.json())
    .then(data => { return data });