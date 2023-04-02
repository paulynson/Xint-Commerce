import React, { useEffect, useRef } from "react";
import GooglePayButton from "@google-pay/button-react";
import { useAuth } from "./../../../firebase/firebase";
import { useSelector } from "react-redux/es/exports";

export const GoogleButton = () => {
  const currentUser = useAuth();
  const emailRef = useRef();
  const { total } = useSelector((state) => state.cart);

  // Check if the user is logged in
  useEffect(() => {
    const handleLoginCheck = async () => {
      if (currentUser) {
        // await login(emailRef.current);
        console.log(emailRef.current);
      }
    };
    handleLoginCheck();
  }, [currentUser]);

  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo 2 Merchant",
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: `${total.toString()}`,
      currencyCode: "USD",
      countryCode: "US",
    },
  };
  return (
    <div>
      <GooglePayButton
        environment="TEST"
        paymentRequest={paymentRequest}
        onLoadPaymentData={(paymentRequest) => {
          console.log("load payment data", paymentRequest);
        }}
      />
    </div>
  );
};
