function bmi(){
    let height=Number(document.getElementById("height").value);
    let weight=Number(document.getElementById("weight").value)
    let bmi=weight/(height*height);
    let result="";
    if(bmi<16){
        result="Severe Thinness";
    }
    else if(bmi>=16 && bmi<17){
        result="Moderate Thinness";
    }
    else if(bmi>=17 && bmi<18.5){
        result="Mild Thinness";
    }
    else if(bmi>=18.5 && bmi<25){
        result="Normal";
    }
    else if(bmi>=25 && bmi<30){
        result="Overweight";
    }
    else{
        result="Obese";
    }
    document.getElementById("result").value=" BMI is" +" " +result;
    
}