const axios = require('axios');
const arrToString = require('../arrToString/arrToString');

const getData = async () => {
try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
const userId = response.data.map(user => user.id);
console.log(arrToString(userId));
return arrToString(userId);
} catch (e) {
    console.log(e);
}
}

module.exports = getData;