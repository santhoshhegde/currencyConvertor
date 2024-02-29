
let BaseURL = 'https://v6.exchangerate-api.com/v6/018ffde9f2ce76719c6d1bac/pair/'
let select = document.querySelectorAll('select');
let btn = document.querySelector('form button');
let fromCur = document.querySelector('.from select');
let toCur = document.querySelector('.to select');
let msg = document.querySelector('.msg');

const updateExchangeRate = async() => {
    let amount = document.querySelector('.amount input');
    amtVal = amount.value;
    if(amtVal <=0 || amtVal==''){
        amount.value = 1;
    }
    let url = `${BaseURL}${fromCur.value}/${toCur.value}`;
    let response = await fetch(url);
    let data = await response.json();
    let rate = data['conversion_rate'];
    let finalAmt = amtVal * rate; 
    msg.innerText = `${fromCur.value} ${amtVal} ${toCur.value} ${finalAmt}`
}





function changeFlag(element){
    let CurrCode = element.value;
    let img = element.parentElement.querySelector('img');
    img.src = `https://flagsapi.com/${countryList[CurrCode]}/flat/64.png`;
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

window.addEventListener('load',()=>(updateExchangeRate()));

btn.addEventListener('click' , (evt)=>{
    evt.preventDefault();
    updateExchangeRate()
})
