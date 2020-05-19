export const API_KEY = "&appid=4cb55903eaf440177d406b075274d0c1";
export const FORECAST_URL = "https://samples.openweathermap.org/data/2.5/climate/month?q=";
export const HISTORY_URL = "https://samples.openweathermap.org/data/2.5/history/city?q="; //takes cityname and country code



// export const FORECAST_URL =  "https://pro.openweathermap.org/data/2.5/climate/month?q=";
// export const HISTORY_URL =  "http://history.openweathermap.org/data/2.5/history/city?q=";
// export const HISTORY_URL =  "http://history.openweathermap.org/data/2.5/history/city?q="; //takes cityname and country code







//BACK ROOM
const mockArray = [
    { "index": 0, "date": "February 6, 2020, 12:21 pm", "temperature": 1, "city": "Tamale", "country": "Taiwan, Province of China", "countryCode": "PR" }, { "index": 1, "date": "January 1, 2020, 8:31 pm", "temperature": 20, "city": "South Tarawa", "country": "Lithuania", "countryCode": "AT" }, { "index": 2, "date": "February 6, 2020, 5:56 am", "temperature": 1, "city": "Luanda", "country": "Latvia", "countryCode": "BM" }, { "index": 3, "date": "June 14, 2020, 11:11 pm", "temperature": 50, "city": "Christchurch", "country": "Saint Vincent and the Grenadines", "countryCode": "HM" }, { "index": 4, "date": "April 21, 2020, 5:34 am", "temperature": 47, "city": "Curitiba", "country": "France", "countryCode": "KM" }, { "index": 5, "date": "January 23, 2020, 8:31 pm", "temperature": 28, "city": "Leeds", "country": "Luxembourg", "countryCode": "PN" }, { "index": 6, "date": "March 23, 2020, 9:10 pm", "temperature": 22, "city": "Salt Lake City", "country": "Hong Kong", "countryCode": "BW" }, { "index": 7, "date": "June 26, 2020, 8:49 pm", "temperature": 22, "city": "Kano", "country": "Peru", "countryCode": "KI" }, { "index": 8, "date": "March 7, 2020, 4:18 am", "temperature": 6, "city": "Durango", "country": "Trinidad and Tobago", "countryCode": "AD" }, { "index": 9, "date": "May 10, 2020, 5:57 am", "temperature": 5, "city": "Astana", "country": "Zambia", "countryCode": "BN" }, { "index": 10, "date": "June 20, 2020, 4:01 am", "temperature": 23, "city": "Yamoussoukro", "country": "Solomon Islands", "countryCode": "AG" }, { "index": 11, "date": "April 30, 2020, 4:16 pm", "temperature": 15, "city": "Nouméa", "country": "Cocos (Keeling) Islands", "countryCode": "GE" }, { "index": 12, "date": "January 6, 2020, 12:00 am", "temperature": 45, "city": "Zagreb", "country": "Georgia", "countryCode": "YE" }, { "index": 13, "date": "March 23, 2020, 5:44 am", "temperature": 5, "city": "Lhasa", "country": "Lithuania", "countryCode": "BR" }, { "index": 14, "date": "June 4, 2020, 11:15 am", "temperature": 30, "city": "Jersey City", "country": "Netherlands", "countryCode": "GR" }, { "index": 15, "date": "May 20, 2020, 8:24 am", "temperature": 40, "city": "Tampa", "country": "Bosnia and Herzegovina", "countryCode": "GG" }, { "index": 16, "date": "March 26, 2020, 10:25 am", "temperature": 36, "city": "Brussels", "country": "Suriname", "countryCode": "GH" }, { "index": 17, "date": "May 27, 2020, 2:50 am", "temperature": 12, "city": "Nakhon Ratchasima", "country": "Guatemala", "countryCode": "AX" }, { "index": 18, "date": "June 18, 2020, 2:37 pm", "temperature": 45, "city": "Lviv", "country": "Guam", "countryCode": "NC" }, { "index": 19, "date": "June 29, 2020, 2:53 am", "temperature": 15, "city": "Wellington", "country": "Nicaragua", "countryCode": "NI" }, { "index": 20, "date": "April 22, 2020, 11:24 am", "temperature": 6, "city": "Minneapolis", "country": "Niger", "countryCode": "SK" }, { "index": 21, "date": "January 18, 2020, 10:10 pm", "temperature": 47, "city": "Yaren District", "country": "Slovenia", "countryCode": "VG" }, { "index": 22, "date": "June 20, 2020, 1:01 am", "temperature": 12, "city": "Belfast", "country": "Solomon Islands", "countryCode": "AG" }, { "index": 23, "date": "April 21, 2020, 5:01 am", "temperature": 45, "city": "Mbabane", "country": "Chile", "countryCode": "US" }, { "index": 24, "date": "March 15, 2020, 2:15 pm", "temperature": 24, "city": "Cebu City", "country": "San Marino", "countryCode": "TW" }, { "index": 25, "date": "May 11, 2020, 10:48 am", "temperature": 8, "city": "Tel Aviv", "country": "Brunei Darussalam", "countryCode": "UA" }, { "index": 26, "date": "May 8, 2020, 4:43 pm", "temperature": 6, "city": "Hanoi", "country": "Mauritania", "countryCode": "MR" }, { "index": 27, "date": "January 14, 2020, 7:52 pm", "temperature": 12, "city": "Tallinn", "country": "Iceland", "countryCode": "FM" }, { "index": 28, "date": "March 13, 2020, 7:08 pm", "temperature": 13, "city": "Yakutsk", "country": "Malawi", "countryCode": "YE" }, { "index": 29, "date": "February 28, 2020, 1:06 pm", "temperature": 27, "city": "Ulan Bator", "country": "Egypt", "countryCode": "NG" }, { "index": 30, "date": "April 20, 2020, 9:52 am", "temperature": 46, "city": "Addis Ababa", "country": "Namibia", "countryCode": "UY" }, { "index": 31, "date": "February 7, 2020, 5:57 pm", "temperature": 3, "city": "Winnipeg", "country": "Saint Pierre and Miquelon", "countryCode": "SB" }, { "index": 32, "date": "April 16, 2020, 7:09 pm", "temperature": 7, "city": "Rabat", "country": "Tajikistan", "countryCode": "NU" }, { "index": 33, "date": "January 10, 2020, 5:29 pm", "temperature": 18, "city": "Majuro", "country": "Kazakhstan", "countryCode": "DO" }, { "index": 34, "date": "May 9, 2020, 4:31 pm", "temperature": 48, "city": "Vladivostok", "country": "France", "countryCode": "SK" }, { "index": 35, "date": "January 10, 2020, 3:14 pm", "temperature": 3, "city": "Reykjavík", "country": "China", "countryCode": "HR" }, { "index": 36, "date": "May 19, 2020, 10:09 pm", "temperature": 47, "city": "Gdańsk", "country": "Colombia", "countryCode": "GF" }, { "index": 37, "date": "January 23, 2020, 4:55 pm", "temperature": 1, "city": "Dili", "country": "Zambia", "countryCode": "FK" }, { "index": 38, "date": "May 13, 2020, 4:30 pm", "temperature": 46, "city": "Yellowknife", "country": "Philippines", "countryCode": "GR" }, { "index": 39, "date": "April 17, 2020, 5:57 pm", "temperature": 5, "city": "Nukuʻalofa", "country": "Mauritania", "countryCode": "HR" }, { "index": 40, "date": "June 4, 2020, 9:12 am", "temperature": 4, "city": "Medina", "country": "Bosnia and Herzegovina", "countryCode": "ER" }, { "index": 41, "date": "June 10, 2020, 6:04 am", "temperature": 19, "city": "Castries", "country": "Viet Nam", "countryCode": "LV" }, { "index": 42, "date": "February 16, 2020, 2:15 am", "temperature": 26, "city": "Fortaleza", "country": "Azerbaijan", "countryCode": "FM" }, { "index": 43, "date": "February 24, 2020, 1:04 pm", "temperature": 24, "city": "Tegucigalpa", "country": "Turkmenistan", "countryCode": "DO" }, { "index": 44, "date": "June 29, 2020, 11:01 pm", "temperature": 25, "city": "Iquitos", "country": "Gabon", "countryCode": "AD" }, { "index": 45, "date": "April 26, 2020, 5:39 am", "temperature": 1, "city": "Turin", "country": "Hungary", "countryCode": "CH" }, { "index": 46, "date": "June 3, 2020, 8:11 am", "temperature": 47, "city": "Bridgetown", "country": "Pitcairn", "countryCode": "MA" }, { "index": 47, "date": "April 11, 2020, 4:46 pm", "temperature": 6, "city": "Tijuana", "country": "Turks and Caicos Islands", "countryCode": "CD" }, { "index": 48, "date": "January 25, 2020, 10:46 am", "temperature": 33, "city": "Austin", "country": "Azerbaijan", "countryCode": "DJ" }, { "index": 49, "date": "January 25, 2020, 4:35 pm", "temperature": 37, "city": "Port Said", "country": "Qatar", "countryCode": "VN" }, { "index": 50, "date": "February 15, 2020, 8:19 am", "temperature": 27, "city": "Wollongong", "country": "Japan", "countryCode": "UM" }, { "index": 51, "date": "February 8, 2020, 2:11 am", "temperature": 42, "city": "Mexico City", "country": "Argentina", "countryCode": "BH" }, { "index": 52, "date": "March 10, 2020, 2:57 pm", "temperature": 36, "city": "Banda Aceh", "country": "Macedonia, The Former Yugoslav Republic of", "countryCode": "AM" }, { "index": 53, "date": "January 15, 2020, 5:20 pm", "temperature": 34, "city": "Casablanca", "country": "Martinique", "countryCode": "LA" }, { "index": 54, "date": "June 14, 2020, 2:01 am", "temperature": 2, "city": "Sana'a", "country": "Madagascar", "countryCode": "LU" }, { "index": 55, "date": "March 4, 2020, 8:13 pm", "temperature": 1, "city": "San Francisco", "country": "Turks and Caicos Islands", "countryCode": "KR" }, { "index": 56, "date": "January 25, 2020, 9:25 am", "temperature": 1, "city": "City of San Marino", "country": "Colombia", "countryCode": "BW" }, { "index": 57, "date": "March 13, 2020, 6:41 am", "temperature": 48, "city": "Belém", "country": "Thailand", "countryCode": "FM" }, { "index": 58, "date": "May 25, 2020, 6:02 am", "temperature": 6, "city": "Brazzaville", "country": "Togo", "countryCode": "RE" }, { "index": 59, "date": "February 13, 2020, 1:01 pm", "temperature": 3, "city": "Saint-Denis", "country": "Zambia", "countryCode": "DJ" }, { "index": 60, "date": "February 27, 2020, 3:59 pm", "temperature": 48, "city": "Mata-Utu", "country": "Myanmar", "countryCode": "BD" }
]

function buildIconsRef() {
    const weatherConditions = buildWeatherConditions();
    const icons = ['weather-cloudy', 'weather-fog', 'weather-hail', 'weather-hazy', 'weather-hurricane', 'weather-lightning', 'weather-lightning-rainy', 'weather-partly-cloudy', 'weather-partly-rainy', 'weather-pouring', 'weather-rainy', 'weather-snowy', 'weather-snowy-heavy', 'weather-sunny', 'weather-tornado', 'weather-windy'];

    let obj = [];
    for (let i = 0; i < weatherConditions.length; i++) {
        let temp = {
            condition: weatherConditions[i],
            icon: icons[i]
        }
        obj.push(temp);
    }
    return obj;
}

function buildDates() {
    const today = new Date();
    const priorDate = new Date(new Date().setDate(today.getDate() - 30));
    const futureDate = new Date(new Date().setDate(today.getDate() + 30));
    const year = priorDate.getFullYear();
    const month = priorDate.getMonth();
    let day = priorDate.getDate();
    // console.log('priorDate', priorDate, 'futureDate', futureDate);
    const dates = [priorDate];
    
    while (dates[dates.length - 1] < futureDate) {
        dates.push(new Date(year, month, ++day));
    }
    return dates;
}

function buildWeatherConditions() {
    const weatherConditions = ['Cloudy', 'Fog', 'Hail', 'Hazy', 'Hurricane', 'Lightning', 'Thunder Storm', 'Partly Cloudy', 'Partly Rainy', 'Pour', 'Rain', 'Snow', 'Heavy Snow', 'Sunny', 'Tornado', 'Windy']
    return weatherConditions;
}

function buildArray(arr) {
    const datesArray = buildDates();
    // console.log('dates', datesArray);
    const weatherConditions = buildWeatherConditions();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    for (let i = 0; i < arr.length; i++) {
        arr[i].date = datesArray[i];
        if (i === 31) {
            console.log(datesArray[i]);
            console.log(new Date());
            console.log(months[datesArray[i].getMonth()]);
            console.log(datesArray[i].getMonth());
        }
        arr[i].day = days[datesArray[i].getDay()];
        arr[i].month = months[datesArray[i].getMonth()];
        arr[i].weatherCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]
    }
    return arr;
}

function buildImagesRef() {
    const cloudyImg = require('../../assets/cloudy.jpeg');
    const rainyImg = require('../../assets/rain.jpg');
    const windyImg = require('../../assets/windy.jpg');
    const snowyImg = require('../../assets/snowy.jpg');
    const fogImg = require('../../assets/fog.jpg');
    const sunnyImg = require('../../assets/sunny.jpeg');
    const lightningImg = require('../../assets/lightning.jpg');

    const arr = { cloudy: cloudyImg, rainy: rainyImg, windy: windyImg, snowy: snowyImg, fog: fogImg, sunny: sunnyImg, lightning: lightningImg };
    return arr;
}

export function updateBg(wc) {
    let image = '';
    let tint;
    let imageReference = buildImagesRef();
    if (wc === 'Cloudy' || wc === 'Partly Cloudy') {
        image = imageReference.cloudy;
        tint = 'rgba(162, 186, 186,0.5)';
    } else if (wc === 'Rain' || wc === 'Pour' || wc === 'Partly Rainy') {
        image = imageReference.rainy;
        tint = 'rgba(47, 81, 130,0.5)';
    } else if (wc === 'Windy') {
        tint = 'rgba(199, 254, 255,0.5)';
        image = imageReference.windy;
    } else if (wc === 'Snow' || wc === 'Heavy Snow' || wc === 'Hail') {
        tint = 'rgba(162, 186, 186,0.5)';
        image = imageReference.snowy;
    } else if (wc === 'Sunny' || wc === 'Partly Sunny') {
        image = imageReference.sunny;
        tint = 'rgba(252, 198, 3,0.5)';
    } else if (wc === 'Fog' || wc === 'Hazy') {
        image = imageReference.fog;
        tint = 'rgba(162, 186, 186,0.5)';
    } else if (wc === 'Lightning' || wc === 'Hurricane' || wc === 'Tornado' || wc === 'Thunder Storm') {
        image = imageReference.lightning;
        tint = 'rgba(47, 81, 130,0.5)';
    }
    return {
        image: image,
        tint: tint
    };
}

export const WEATHER_REPORT = buildArray(mockArray);
export const ICONS_REF = buildIconsRef();
export const IMAGES_REF = buildImagesRef();



