export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Spear";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION || "Modern Ecommerce Site";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCTS_LIMIT = Number(
  process.env.LATEST_PRODUCTS_LIMIT || 6
);

export const signInDefaultValues = {
  email: "",
  password: "",
};

// sign up default values
export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const shippingAddressDefaultValues = {
  fullName: "",
  streetName: "",
  city: "",
  postalCode: "",
  country: "",
};
