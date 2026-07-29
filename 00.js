export function KOOP_POOK_TIME(respo){
    if(respo.mode === "KOOP"){
        T6D.flow(1, 0, 1); // stabil
    } else if(respo.mode === "POOK"){
        T6D.flow(0, 1, -1); // drift
    }
    return [...T6D.t];
}
