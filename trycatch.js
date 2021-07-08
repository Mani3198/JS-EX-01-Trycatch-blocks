// Simple Centimeter to MilliMeter Converter

const convertoMM = (centimeters) =>{
    if(typeof centimeters == 'number'){
        return centimeters*10 ;
    }else {
        throw Error('Pls Enter Number type to convert');
    }
}
try{
let resultMM = convertoMM('nine');
console.log(resultMM );
}catch(error){
    // console.log(error);
    logMyErrors(error);  
}

console.log('After Error');

