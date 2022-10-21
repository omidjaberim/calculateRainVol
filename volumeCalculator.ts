
const volumeCalculatorShibdar = (a: number[]) => { /// ba farze vojoode mosalas va khotoote shib dar
    /// dar in mored bayad har ja ke addad nozool kard masahat az akharin adadi ro 
    // ke nozool karde boode hesab konim --\\\---/ 
    // az linked list mirim va pointer poshti hamishe jayee ro ke shoroo be nozool kardim o dare
    let totalVolume = 0;
    let j = 0; // hill top keeper
    let b = 0; /// pointer which shows starting pont of grow 
    for (let i = 1; i < a.length; i++){
        
        if (!b) b = a[i]            
        else if (a[i] < a[i - 1]) b = a[i];/// keep the lowest b 
        
        if (a[i] > a[i + 1] && a[i] > a[i - 1]) {
            if( j != 0 ) /// there was a hill top before this
            {
                if(a[i] > a[j]) {
                    totalVolume += (((a[j] - b) * (a[i] - a[j])) / 2);
                    b = 0; 
                }                     
                else {
                    totalVolume += (((a[i] - b) * (a[i] - a[j])) / 2);
                }
            }
            j = i; ///  its a hill top
            
        }


    }
    return totalVolume;
}


const volumeCalculator = (a:number[]) => { /// zamani ke adade dakhel array ertefa mahdooode index ro moshakhas mikonad
    let totalVolume = 0;
    let j = 0; // hamsath keeper
    for (let i = 1; i < a.length; i++){
        if (a[i] < a[i - 1] && a[i] < a[i + 1]) /// agar godal bashad
        {
            totalVolume += a[i - 1] > a[i + 1] ? a[i + 1] : a[i - 1] * 1; // w * L == 1 always
            j = 0;
        }
        if (a[i] === a[i - 1]) /// agar mosatah bashad
        {
            if (!j) j = i; 
            totalVolume += a[j]  * 1;
        }
            
    }

    return totalVolume;
    
}