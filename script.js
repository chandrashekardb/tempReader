const calculateTemp=()=>{

    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selctedIndex].value;
    

    const celToFah = (cel) =>{
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const fahToCel = (fehr) =>{
        let celsius = Math.round((fehr -32) * 5/9);
        return celsius;
    }

    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML= `=${result} Celsius`
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML= `=${result} Fahrenheit`
    }

}