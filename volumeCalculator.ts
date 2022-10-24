
const volumeCalculator = (a:number[]) => {
    let totalVolumeUnder = 0;    
    let maxHeight = 0; 
    for (let i = 1; i < a.length; i++){ /// hajme zire nemudaro hesab mikonim az hajm kol kam mikonim         
        totalVolumeUnder += a[i]; /// chon arz o toolo 1 gereftim    
        if(maxHeight < a[i])  maxHeight = a[i]  
    }

    let totVol = maxHeight * a.length;
     

    return totVol - totalVolumeUnder;
    
}
