class Validator {

    static isValid(entry) {

        return (

            typeof entry.CustomerId === 'string' &&

            typeof entry.API_Calls === 'number' &&

            typeof entry.Storage_GB === 'number' &&

            typeof entry.Compute_Minutes === 'number'

        );

    }

}

module.exports = Validator;