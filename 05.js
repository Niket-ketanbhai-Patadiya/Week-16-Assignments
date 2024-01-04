const urlPattern=/^(https?|ftp):\/\/(([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}|localhost)(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

function isValidUrl(input){
    return urlPattern.test(input)
}

const url="https://pwskills.com"

if(isValidUrl(url)){
    console.log(`${url} is a valid url`);
}else{
    console.log(`${url} is not a valid url`);
}