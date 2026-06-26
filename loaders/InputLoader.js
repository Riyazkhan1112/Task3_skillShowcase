const fs = require('fs');

const Validator = require('../utils/Validator');

class InputLoader {

    static load(filePath) {

        const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

        const validEntries = [];

        data.forEach(entry => {

            if (Validator.isValid(entry)) {

                validEntries.push(entry);

            } else {

                console.log(

                    `Skipped invalid entry: Missing or invalid fields for CustomerId: ${entry.CustomerId}`

                );

            }

        });

        return validEntries;

    }

}

module.exports = InputLoader;