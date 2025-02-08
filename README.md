# Stablecoin API for Global Payments

### Power Instant Global Transfers with a Single Integration

Grow more, pay less, and move faster with Kappa’s stablecoin API. Simplify global payments and empower your business to scale without borders.

## Key Features

- **Global Payments 24/7:** Process payments anytime, anywhere with instant settlements.
- **Seamless Stablecoin Integration:** Easily integrate stablecoins into your payment flow with developer-friendly APIs.
- **Onramp and Offramp:** Connect blockchain wallets, get real-time quotes, and enjoy low fees.
- **Regulatory Compliance:** We handle all regulatory, compliance, and technical hurdles.

## Use Cases

- **Global Payroll:** Pay contractors in any currency, no matter their location.
- **Enterprise Payouts:** Manage mass global payments effortlessly.
- **Merchant Settlement:** Expedite payouts with automatic currency consolidation.
- **Business Invoicing:** Streamline invoicing processes using stablecoin transactions.
- **Remittances:** Offer fast and affordable remittance solutions.

## Developer Guide

### Installation

To get started, install the Kappa SDK:

```bash
npm install kappa --legacy-peer-deps
```

### Quick Start Example

```javascript
import { KappaAi } from 'kappa';

const Kappa = new Kappa('<api_key>');

(async function() {
  // Light KYC
  await Kappa.customers.create('<instance_id>', {
    type: "individual",
    kyc_type: "light",
    email: "email@example.com",
    tax_id: "12345678",
    country: "US",
    first_name: "John",
    last_name: "Doe",
    date_of_birth: "1998-01-01T00:00:00Z",
  });

  // Standard KYC
  await Kappa.customers.create('<instance_id>', {
    type: "individual",
    kyc_type: "standard",
    email: "email@example.com",
    tax_id: "12345678",
    address_line_1: "8 The Green",
    address_line_2: "#12345",
    city: "Dover",
    state_province_region: "DE",
    country: "US",
    postal_code: "02050",
    ip_address: "127.0.0.1",
    phone_number: "+1234567890",
    proof_of_address_doc_type: "UTILITY_BILL",
    proof_of_address_doc_file: "https://example.com/proof_of_address.jpg",
    first_name: "John",
    last_name: "Doe",
    date_of_birth: "1998-01-01T00:00:00Z",
    id_doc_country: "US",
    id_doc_type: "PASSPORT",
    id_doc_front_file: "https://example.com/id_doc_front.jpg"
  });
})();
```

## API Features

- **KYC/B:** Streamlined customer verification
- **Bank Account Support:** Connect bank accounts for seamless payments
- **Crypto to Fiat:** Effortless currency conversions
- **Blockchain Wallet Integration:** Connect any wallet
- **Fiat to Crypto:** Quick and secure transactions

## Documentation

For detailed API documentation, visit our [Docs](https://example.com/docs).

## Get Started

- [Request a Demo]()
- [Go to Docs]()

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

**Kappa, Inc.**

- Email: [support@kappahelp.com](mailto\:support@example.com)

## Disclaimer

Kappa, Inc. is a financial technology company and is a registered Money Services Business with the US Treasury's Financial Crimes Enforcement Network (FinCEN). We are not a bank. By creating and using your account at Kappa, you agree to Kappa, Inc.'s Terms of Service, to all applicable laws and regulations, and acknowledge that you are responsible for compliance with any applicable local laws.

