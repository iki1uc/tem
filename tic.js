import { evaluateStation } from "./SYS.station.analyze.js";
import { TEM6D_MATRIX } from "./TEM6D.matrix.js";
import { TEM6D_ROOT } from "./TEM6D.root.js";

export function TIME_PIPELINE(stations){

    const evals = stations.map(evaluateStation);
    const matrix = TEM6D_MATRIX(evals);
    const final = matrix.map(TEM6D_ROOT);

    return final;
}
