class InvoicePrinter {

    static print(invoice) {

        console.log();

        console.log(`Invoice for Customer: ${invoice.CustomerId}`);

        console.log("-----------------------------------");

        console.log(
            `API Calls      : ${invoice.API_Calls} -> $${invoice.apiCost.toFixed(2)}`
        );

        console.log(
            `Storage        : ${invoice.Storage_GB} GB -> $${invoice.storageCost.toFixed(2)}`
        );

        console.log(
            `Compute Time   : ${invoice.Compute_Minutes} mins -> $${invoice.computeCost.toFixed(2)}`
        );

        console.log("-----------------------------------");

        console.log(`Total Due      : $${invoice.total.toFixed(2)}`);

    }

}

module.exports = InvoicePrinter;