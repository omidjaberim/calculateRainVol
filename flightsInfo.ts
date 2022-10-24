interface Flight {
    flightId: number;
    isGuarantee: boolean;
    minPrice: number;
}
const flightsInfo = (a: Flight[]) => {
    let retArr:Flight[] = []
   
    for (let i = 0; i < a.length; i++) {
        if (!retArr.length) {
            retArr[a[i].flightId].flightId = a[i].flightId;
            retArr[a[i].flightId].isGuarantee = a[i].isGuarantee;
            retArr[a[i].flightId].minPrice = a[i].minPrice
        } /// first loop actually
        else
            retArr[a[i].flightId] = {
                flightId: a[i].flightId,
                isGuarantee: a[i].isGuarantee || retArr[a[i].flightId].isGuarantee, // choose the true one
                minPrice: Math.min(a[i].minPrice,retArr[a[i].flightId].minPrice) // choose min
            } 
    } 

    return retArr
}
