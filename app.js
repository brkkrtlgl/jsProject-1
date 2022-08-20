const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["#4C594E", "#F2A341", "8C612B", "BF8845", "D9D9D9", "#3F2F6F", "#265E72", "#4094A4", "#E16B37", "#E6A141","#4C594E", "#F2A341", "8C612B", "BF8845", "D9D9D9", "#3F2F6F", "#265E72", "#4094A4", "#E16B37", "#E6A141"];


button.addEventListener("click", changeBackground);



function changeBackground(){
    // rastgele bir renk

    // const randomNumber = Math.floor(Math.random() * colors.length);
    // const chooseColor = colors[randomNumber];
    // body.style.backgroundColor = chooseColor;

    // sırayla arkaplan seç

    
    

    for( let i=0; i<=colors.length;i++){
    const chooseColor = colors[i];
    body.style.backgroundColor = chooseColor;
        console.log("i")        
    }
   
}