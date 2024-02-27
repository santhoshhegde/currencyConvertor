let select = document.querySelectorAll('select');




function changeFlag(element){
    let CurrCode = element.value;
    let img = document.querySelector('img');
    img.src = `https://flagsapi.com/${countryList[CurrCode]}/flat/64.png`
    
}





for (let dropdown of select){
    for (let CurrCode in countryList){
        let option= document.createElement('option');
        option.innerText = CurrCode;
        option.value = CurrCode;
        if(dropdown.name=='from' && CurrCode==='USD'){
            option.selected = 'selected';
        }
        if(dropdown.name=='to' && CurrCode==='INR'){
            option.selected = 'selected';
        }
        dropdown.append(option);
    } 
    dropdown.addEventListener('change',(evt)=>{
        changeFlag(evt.target);
    })
}
