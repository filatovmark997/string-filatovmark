// Dependencies
const axios = require('axios');
const moment = require('moment');

// Function to fetch random quote
async function getRandomQuote() {
    try {
        const response = await axios.get('https://api.quotable.io/random');
        return response.data.content;
    } catch (error) {
        throw new Error('Failed to fetch random quote');
    }
}

// Function to calculate age from date of birth
function calculateAge(dateOfBirth) {
    const dob = moment(dateOfBirth);
    const now = moment();
    return now.diff(dob, 'years');
}

// Function to generate a random integer within a range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
    getRandomQuote,
    calculateAge,
    getRandomInt
};
