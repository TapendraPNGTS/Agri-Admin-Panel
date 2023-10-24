// assets
import phonepay from "assets/images/e-commerce/phonepay.png";
import card from 'assets/images/e-commerce/card.png';
import cod from 'assets/images/e-commerce/cod.png';

// ==============================|| CHECKOUT - PAYMENT OPTIONS ||============================== //

const PaymentOptions = [
  {
    id: 1,
    value: "phonepe",
    title: "Pay with Phone Pe",
    caption:
      "You will be redirected to Phone Pe to complete your purchase securely.",
    image: phonepay,
    size: {
      width: 16,
      height: 16,
    },
  },
  {
    id: 3,
    value: "cod",
    title: "Cash on Delivery (COD)",
    caption: "Pay with cash when your order is delivered.",
    image: cod,
    size: {
      width: 46,
      height: 28,
    },
  },
];

export default PaymentOptions;
