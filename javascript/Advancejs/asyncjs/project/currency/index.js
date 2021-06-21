const axios = require('axios');

// https://fixer.io/
http://data.fixer.io/api/latest?access_key=212d0fd50652f2307643f18032d62489
const FIXER_API_KEY = '212d0fd50652f2307643f18032d62489';
const FIXER_API = `http://data.fixer.io/api/latest?access_key=${FIXER_API_KEY}`;

// https://restcountries.eu
const REST_COUNTRIES_API = `https://restcountries.eu/rest/v2/currency`;


//fetch data about currency
const getexchangeRate= async (fromCurrency, toCurrency) =>{
const {data:{rates}}= await axios.get(FIXER_API);
const euro = 1/rates[fromCurrency];
const exchangRate=euro*rates[toCurrency];
return exchangRate;

}


// getexchangeRate('USD','EUR')

//fetch data about countries
const getCounty=async (currencyCode)=>{
    const {data} = await axios.get(`${REST_COUNTRIES_API}/${currencyCode}`);
    // data.map((country)=> country.name
  return  data.map(({name})=> name);


 }
//  getCounty('AUD');

const convertCurrency=async (fromCurrency,toCurrency,amount)=>{
    fromCurrency = fromCurrency.toUpperCase();
    toCurrency = toCurrency.toUpperCase();


   const [exchangeRate,country]= await Promise.all([
 
   getexchangeRate(fromCurrency,toCurrency),
     getCounty(toCurrency)])

     const covertedAmount=(amount*exchangeRate).toFixed(2);


     return `$`

 }



// output data
