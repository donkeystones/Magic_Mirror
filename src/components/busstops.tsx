import { useEffect, useState } from "react";
import BusstopTimeTable, { BusstopTimeTableProps } from "./busstoptimetable"
import "./busstops.css";
import { GetDeparturesVasagatan, GetDeparturesVasaparken } from "../assets/api_calls";
import { VASAGATAN_KN_BORLANGE_ID, VASAPARKEN_RESECENTRUM_ID } from "../assets/station_ids";

const Busstops = () => {
    const [busstops, set_busstop] = useState<Array<BusstopTimeTableProps>>([]);

    useEffect(() => {
        const loadBusStops = async () => {
            let busstoptemp: Array<BusstopTimeTableProps> = [];
            let data = await GetDeparturesVasagatan();
            busstoptemp.push(parseBusstopData(data, VASAGATAN_KN_BORLANGE_ID));
            data = await GetDeparturesVasaparken();
            busstoptemp.push(parseBusstopData(data, VASAPARKEN_RESECENTRUM_ID));
            set_busstop(busstoptemp);
        }

        const interval = setInterval(() => {
            loadBusStops().catch(console.error)
        }, 180000);
        loadBusStops().catch(console.error);

        return () => clearInterval(interval);
    },[])

    return <div className="busstops">
        {busstops.map(busstop => {
            return <BusstopTimeTable key={busstop.stop_name} {...busstop} />
        })}
        
    </div>
}

const parseBusstopData = (rawData: any, busstopId: string): BusstopTimeTableProps => {
    let busstoptimetable: BusstopTimeTableProps = {
        stop_name: "",
        busses_departing: []
    };
    rawData.Departure.map((departure: { stopExtId: string; time: any; direction: any; directionFlag: any; name: any; stop: any; }) => {
        if(departure.stopExtId === busstopId){
            busstoptimetable.busses_departing.push({
                departure_time: departure.time,
                direction: departure.direction,
                direction_flag: departure.directionFlag,
                name: departure.name
            })
            if(busstoptimetable.stop_name === "") 
                busstoptimetable.stop_name = departure.stop
        }
    })
    return busstoptimetable!;
} 

export default Busstops;