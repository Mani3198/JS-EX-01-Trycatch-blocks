let getMonthName = (mnum)=>{
    mnum = mnum-1;
    let Months = ['JAN','FEB','MAR','APR','MAY','JUN','JULY','AUG','SEPT','OCT','NOV','DEC'];
    if(Months[mnum]){
    return Months[mnum];
    }else{
        throw Error('Invalid Month Number');
    }
}
try{
let name = getMonthName('seven');
console.log(name);
} 
// catch(err){
//    // console.error(err);
// }
finally{
    console.log('code runs even error occur or Not')
}
console.log('After Error ');