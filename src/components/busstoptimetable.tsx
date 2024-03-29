export interface BusstopTimeTableProps {
    stop_name: string;
    busses_departing: Array<BusDeparting>;
}

export interface BusDeparting {
    name: string;
    direction: string;
    direction_flag: string;
    departure_time: string;
}

const BusstopTimeTable = (props: BusstopTimeTableProps) => {
    return <div>
        <h1>{props.stop_name}</h1>
        {props.busses_departing.map(departing_bus => {
            return <p key={departing_bus.name+departing_bus.departure_time}>{departing_bus.direction} - {departing_bus.name}, {departing_bus.departure_time}</p>
        })}
    </div>
}

export default BusstopTimeTable;