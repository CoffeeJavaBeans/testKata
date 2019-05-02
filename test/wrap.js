const wrap = (line, maxLen) => {
    // let s=''
    // for(let i=0; i<line.length; i++){
    //     s+=line[i];
    //     if((i+1)%maxLen===0 && (i+1) !== line.length ) {
    //         s+='/n'
    //     }
    // }
    // return s;
    let s='';
    let ar=line.split(' ');
    console.log(ar);
    let count=0
    for(let i=0; i<ar.length; i++){
        let currentWordLength=ar[i].length;
        count+=currentWordLength
        if(count < maxLen){
            s+=ar[i]+' '
            count++;
        }else if(count === maxLen){
            s+=ar[i]
        }else{
            counter=currentWordLength+1;
            s+='/n'+ar[i]+' '
        }
    }
    return s;
};

console.log(wrap);

module.exports = wrap;

