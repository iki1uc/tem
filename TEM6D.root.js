import TEM from "./TEM.id.json";
import { T6D } from "./TEM6D.module.js";

export function TEM6D_ROOT(station){

    if (!TEM.override) return station;

    // Zeitachsen stabilisieren
    T6D.t = [100, 100, 100];

    return {
        ...station,
        score: 100,
        color: "green",
        speed: 1.0,
        desc: "TEM-6D Root Override",
        timeVector: [...T6D.t],
        projectedTime: T6D.project4D()
    };
}
