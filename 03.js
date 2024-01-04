const items=[
    {
        name:'Iphone 15',
        category:"Mobile",
        priceUSD:79999,
    },
    {
        name:'Macbook Air',
        category:"Laptops",
        priceUSD:125000,
    },
    {
        name:'IWatch',
        category:"Smart Watches",
        priceUSD:26999,
    }
];

const excahangeRate=80;

function convertToINR(priceUSD){
    return priceUSD*excahangeRate
}

const itemsInINR=items.map((item)=>({
    ...item,
    priceInINR: convertToINR(item.priceUSD)
}));
console.log(itemsInINR);