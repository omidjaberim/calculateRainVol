interface Flight {
    flightId: number;
    isGuarantee: boolean;
    minPrice: number;
}
const flightsInfo = (a: Flight[]) => {
    let fId: number[] = [];
    let fIsGuarantee:boolean[] = [];
    let fMinPrice:number[] = [];
    let retArr:Flight[] = []
    for (let i = 0; i <a.length ; i++) {
        if (!fId.length) { fId[i] = a[i].flightId; fIsGuarantee[i] = a[i].isGuarantee;  fMinPrice[i] = a[i].minPrice}
        else if(fId.includes(a[i].flightId)){
            retArr[fId[i]] = {flightId : fId[i] , isGuarantee : a[i].isGuarantee || fIsGuarantee[fId[i]]  ,minPrice: Math.min(a[i].minPrice,fMinPrice[fId[i]])  } 
        }
        else
            retArr[fId[i]] = {flightId : fId[i] , isGuarantee : a[i].isGuarantee,minPrice:a[i].minPrice  } 
    } 
    return retArr
}