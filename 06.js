const urlPattern=/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/gm;

function isValidUrl(input){
    return urlPattern.test(input)
}

const url="https://www.linkedin.com/in/niket-patadiya-463a15262/"

if(isValidUrl(url)){
    console.log(`${url} is a valid LinkedIn url`);
}else{
    console.log(`${url} is not a valid LinkedIn url`);
}