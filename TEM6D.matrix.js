import { T6D } from "./TEM6D.module.js";

export function TEM6D_MATRIX(stations){

    return stations.map(st => {

        const alt = st.zugriff;
        const ghost = st.transfer;
        const real = st.speed;

        const vec = T6D.flow(alt, ghost, real);

        return {
            id: st.id,
            ALT: vec[0],
            GHOST: vec[1],
            REAL: vec[2],
            projected: T6D.project4D()
        };
    });
}
