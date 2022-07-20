import { handleSubmitPrice } from "./lotto.js";

const priceSubmit = document.querySelector(".price-form");
const priceBtn = document.querySelector(".price-btn");

priceSubmit.addEventListener("submit", handleSubmitPrice);
priceBtn.addEventListener("click", handleSubmitPrice);
