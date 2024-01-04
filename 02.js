
function generateRandomNumber(){
    return Math.floor((Math.random()*100)+1)
}

function generateRandomNumberWithDelay(delayInSeconds){
    console.log(`Generating a random No. after a delay of ${delayInSeconds} seconds `);
    let count=3;
    const countInterval=setInterval(()=> {
        console.log(`${count} seconds remaining..`);
        count--;
      
    if(count===0){
        clearInterval(countInterval);
        const randomNumber=generateRandomNumber();
        console.log(`Random Number Generated ${randomNumber}`);
    }
    },1000);
}

generateRandomNumberWithDelay(3)

