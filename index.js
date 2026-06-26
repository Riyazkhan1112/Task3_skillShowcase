const InputLoader = require('./loaders/InputLoader');

const InvoiceCalculator = require('./services/InvoiceCalculator');

const InvoicePrinter = require('./services/InvoicePrinter');

const filePath = process.argv[2] || './usage-data.json';

const customers = InputLoader.load(filePath);

customers.forEach(customer => {

    const invoice = InvoiceCalculator.calculate(customer);

    InvoicePrinter.print(invoice);

});