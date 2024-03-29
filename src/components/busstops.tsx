import { useState } from "react";
import BusstopTimeTable, { BusstopTimeTableProps } from "./busstoptimetable"
import "./busstops.css";

const Busstops = () => {
    const [busstop, set_busstop] = useState<BusstopTimeTableProps>({
        stop_name: "testsson",
        busses_departing: [
            {
                departure_time: "12:00:00",
                direction: "Kvarnsveden",
                direction_flag: "1",
                name: "151"
            },
            {
                departure_time: "13:00:00",
                direction: "Göteborg",
                direction_flag: "2",
                name: "1"
            }
        ]
    });
    return <div className="busstops">
        <BusstopTimeTable {...busstop} />
    </div>
}

export default Busstops;