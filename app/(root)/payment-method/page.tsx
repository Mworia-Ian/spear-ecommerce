import React from "react";
import { Metadata } from "next";
import { auth } from "@/auth";
import { getUserById } from "@/lib/actions/user.actions";
import PaymentMethodForm from "./payment-method-form";
import CheckoutSteps from "@/components/shared/checkout-steps";

export const metadata: Metadata = {
  title: "Select Payment Method",
};

const PaymentmethodPage = async () => {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw new Error("User not Found");

  const user = await getUserById(userId);

  return (
    <div>
      <CheckoutSteps current={2} />
      <PaymentMethodForm preferredPaymentMethod={user.paymentMethod} />
    </div>
  );
};

export default PaymentmethodPage;
