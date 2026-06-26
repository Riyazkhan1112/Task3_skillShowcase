# TASK3 Skills Showcase

A modular **Node.js Console Application** that reads customer usage data from a JSON file, validates the input, calculates usage-based charges, and prints formatted invoices to the console.

---

## 📌 Problem Statement

Build a console-based application that:

* Reads customer usage records from a JSON file.
* Validates each customer record.
* Skips invalid records with warning messages.
* Calculates charges based on predefined pricing rules.
* Prints a formatted invoice for every valid customer.

---

# Features

* Read customer usage data from JSON.
* Validate all required fields.
* Skip malformed or incomplete records.
* Tier-based API pricing calculation.
* Storage and Compute pricing calculation.
* Modular architecture.
* Clean and maintainable code.
* Command-line file path support.
* Easy to extend for additional pricing rules.

---

# Technology Stack

* Node.js
* JavaScript (CommonJS)
* File System (fs)

---

# Project Structure

```text
usage-based-invoicing/
│
├── constants/
│   └── pricing.js
│
├── loaders/
│   └── InputLoader.js
│
├── services/
│   ├── InvoiceCalculator.js
│   └── InvoicePrinter.js
│
├── utils/
│   └── Validator.js
│
├── usage-data.json
├── index.js
├── package.json
└── README.md
```

---

# Pricing Rules

## API Calls

| Usage              | Price           |
| ------------------ | --------------- |
| First 10,000 Calls | $0.01 per call  |
| Above 10,000 Calls | $0.008 per call |

## Storage

| Usage   | Price        |
| ------- | ------------ |
| Storage | $0.25 per GB |

## Compute Time

| Usage   | Price            |
| ------- | ---------------- |
| Compute | $0.05 per minute |

---

# Validation Rules

Each customer record must contain:

* CustomerId
* API_Calls
* Storage_GB
* Compute_Minutes

Validation checks:

* CustomerId must be a string.
* API_Calls must be a number.
* Storage_GB must be a number.
* Compute_Minutes must be a number.

Invalid records are skipped and logged to the console.

---

# Invoice Calculation

For every valid customer:

```
API Cost

=
First 10,000 × 0.01

+

Remaining Calls × 0.008
```

```
Storage Cost

=
Storage_GB × 0.25
```

```
Compute Cost

=
Compute_Minutes × 0.05
```

```
Total

=
API Cost
+
Storage Cost
+
Compute Cost
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/<your-username>/usage-based-invoicing.git
```

Go to the project

```bash
cd usage-based-invoicing
```

Install dependencies

```bash
npm install
```

---

# Running the Application

Using the default JSON file

```bash
npm start
```

Using a custom JSON file

```bash
node index.js usage-data.json
```

---

# Sample Input

```json
[
  {
    "CustomerId": "CUST001",
    "API_Calls": 9500,
    "Storage_GB": 40,
    "Compute_Minutes": 100
  }
]
```

---

# Sample Output

```
Invoice for Customer: CUST001
-----------------------------------
API Calls      : 9500 -> $95.00
Storage        : 40 GB -> $10.00
Compute Time   : 100 mins -> $5.00
-----------------------------------
Total Due      : $110.00
```

Invalid Record

```
Skipped invalid entry:
Missing or invalid fields for CustomerId: CUST_BAD1
```

---

# Modules

## InputLoader

* Reads JSON file.
* Parses input.
* Calls validation.
* Returns valid records.

---

## Validator

* Validates every field.
* Ensures correct data types.
* Rejects invalid records.

---

## InvoiceCalculator

Responsible for:

* API pricing
* Storage pricing
* Compute pricing
* Total calculation

---

## InvoicePrinter

Formats and prints invoices in a readable format.

---

# Constants

All pricing values are stored in

```
constants/pricing.js
```

No pricing values are hardcoded inside business logic.

---

# Error Handling

The application handles:

* Missing JSON fields
* Invalid data types
* Null values
* Missing customer IDs
* Malformed customer records

Invalid entries do not stop the application.

---

# Future Improvements

* Unit testing using Jest.
* CSV export.
* PDF invoice generation.
* Logging using Winston.
* Interactive CLI.
* Docker support.
* REST API version.

---

# Author

**Riyaz Pathan**

---

# License

This project is created for assessment and learning purposes.
