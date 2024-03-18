# string-filatovmark

This module provides a collection of awesome functions for Node.js.

## Installation

You can install this module via npm: `npm install string-filatovmark`


## Usage

```javascript
const { getRandomQuote, calculateAge, getRandomInt } = require('awesome-module');

(async () => {
    try {
        const quote = await getRandomQuote();
        console.log('Random Quote:', quote);

        const age = calculateAge('1990-01-01');
        console.log('Age:', age);

        const randomInt = getRandomInt(1, 100);
        console.log('Random Integer:', randomInt);
    } catch (error) {
        console.error('Error:', error.message);
    }
})();
```

