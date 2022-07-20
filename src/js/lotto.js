import { ERROR_MASSAGES } from "./constants.js";

export const handleSubmitPrice = (e) => {
  e.preventDefault();
  const priceValue = document.querySelector(".price-input").value;

  try {
    validateInput(priceValue);
  } catch (e) {
    alert(e.message);
    return;
  }
  handleHidden();
};

export const validateInput = (data) => {
  if (!data) throw new Error(ERROR_MASSAGES.REQUIRED_VALUE);
  if (data < 1000) throw new Error(ERROR_MASSAGES.MIN_PRICE);
  if (data % 1000) throw new Error(ERROR_MASSAGES.NOT_RIGHT_VALUE);
};

export const handleHidden = () => {
  const hiddenToggle = document.querySelectorAll(".mt-9");

  if (hiddenToggle) hiddenToggle.forEach((v) => v.classList.remove("hidden"));
};
