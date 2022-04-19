var counteEl =document.querySelectorAll('.countNum');


counteEl.forEach(function(counterEl,indx, arr){
    counterEl.innerText ='0';
    // console.log(counterEl)
    incrementCounter();

    function incrementCounter(){
        let currentNum = +counterEl.innerText;
        let dataCeil = counterEl.getAttribute("data-ceil");
        console.log(dataCeil);
        // console.log(dataCeil)
        const increment =dataCeil /13;
        currentNum =Math.round(currentNum+ increment);
        counterEl.innerText =currentNum;
        if(currentNum < dataCeil){
            setTimeout(incrementCounter,50)
        } else{
            counterEl.innerText =dataCeil;
        }
            
        
    }
});