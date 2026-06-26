const Pricing = require('../constants/pricing');

class InvoiceCalculator {

    static calculate(customer) {

        let apiCost = 0;

        if (customer.API_Calls <= Pricing.API_FIRST_LIMIT) {

            apiCost = customer.API_Calls * Pricing.API_FIRST_RATE;

        } else {

            apiCost =
                (Pricing.API_FIRST_LIMIT * Pricing.API_FIRST_RATE) +

                ((customer.API_Calls - Pricing.API_FIRST_LIMIT) *
                    Pricing.API_EXTRA_RATE);

        }

        const storageCost =
            customer.Storage_GB * Pricing.STORAGE_RATE;

        const computeCost =
            customer.Compute_Minutes * Pricing.COMPUTE_RATE;

        const total =
            apiCost +
            storageCost +
            computeCost;

        return {

            ...customer,

            apiCost,

            storageCost,

            computeCost,

            total

        };

    }

}

module.exports = InvoiceCalculator;