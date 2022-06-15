const calculate = document.getElementById('calculate');

calculate.addEventListener('click',()=>{
    let base = document.getElementById('base1').value;
    let height = document.getElementById('height1').value;
    let total = (0.5 *(base * height) )
    document.getElementById('display2').innerHTML =
    total + " meter" ;
}
);