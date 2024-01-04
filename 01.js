let input="Niket Soni"

function revStr(input){
     return input.split('').reverse().join('')
}
function reverseWitheDelay(){
    setTimeout(()=>{
        let reversed=revStr(input)
       console.log(reversed);
    },2000)
}

reverseWitheDelay()