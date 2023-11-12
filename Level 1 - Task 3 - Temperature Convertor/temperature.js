const convert = document.querySelector("#convert");
const unitInput = document.querySelector("#fromUnit");
const unitInput2 = document.querySelector("#toUnit");
const temper = document.querySelector("#temper");
const resultDisp = document.querySelector('#result');
console.log(temper);
function convertt(temper,fromUnit,toUnit){
    let result;
    switch(fromUnit){
        case 'Celcius':
            switch(toUnit){
                case 'Farenheit':
                    result = (temper * 9) / 5 + 32;
                    break;
                case 'Kelvin':
                    result = temper + 273;
                    break;
            }
            break;
        case 'Farenheit':
            switch(toUnit){
                case 'Celcius':
                    result = (temper - 32) * 5 / 9;
                    break;
                case 'Kelvin':
                    result = ((temper - 32) * 5 / 9)+273;
                    break;
            }
            break;
        case 'Kelvin':
            switch(toUnit){
                case 'Celcius':
                    result = temper - 273;
                    break;
                case 'Farenheit':
                    result = (temper - 273) * 9 / 5 + 32;
                    break;
            }
            break;
    }
    return result;
}
function submitVisibility(index){
    if(index == 0){
        convert.style.visibility="hidden";
        resultDisp.style.visibility = "hidden";
    }
    else{
        convert.style.visibility="visible";
    }
}
convert.addEventListener('click',function(){
    let temperature = Number(temper.value);
    const fromUnit = unitInput.options[unitInput.selectedIndex].value;
    const toUnit = unitInput2.options[unitInput2.selectedIndex].value;

    let result = convertt(temperature,fromUnit,toUnit);
    if(isNaN(result)){
        return;
    }
    resultDisp.style.visibility = "visible";
    resultDisp.style.border ='1px solid black';
    resultDisp.innerHTML = `${result.toFixed(2)} ${toUnit}`;
});
unitInput.addEventListener('change',function(){
    const fromUnit = unitInput.options[unitInput.selectedIndex].value;
    // submitVisibility(unitInput.selectedIndex);
    for(option of unitInput2.options){
        option.removeAttribute("disabled");
    }
    unitInput2.options[unitInput.selectedIndex].setAttribute('disabled','disabled');
});
// unitInput2.addEventListener('change',function(){
//     submitVisibility(unitInput2.selectedIndex);
// });
temper.addEventListener('input',function(){
    if(temper.value.length<1 || isNaN(Number(temper.value)))
        submitVisibility(0);
    else
        submitVisibility(1);
});