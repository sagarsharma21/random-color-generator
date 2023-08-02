
const getColor = () => {
    //Generate random number
    const random_number = Math.random();
    
    const valid_number = Math.floor(random_number * 16777215);
    console.log(`The no is: `+ valid_number);
    
    const color_code = "#" + valid_number.toString(16);
    console.log(`Color code is: `+ color_code);
    
    document.body.style.backgroundColor = color_code;

    const b = document.getElementById("color-code");
    b.innerHTML = color_code;
}

//event call / manual (using onclick)
const a = document.getElementById("btn");  
    console.log(`btn id is: `+ a);
        a.addEventListener("click", getColor);
 
//initial call
getColor();