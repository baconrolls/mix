function checkMix() {
  const product1 = document.getElementById("product1").value;
  const product2 = document.getElementById("product2").value;
  const resultMessage = document.getElementById("result");

  if (product1 === product2) {
    resultMessage.textContent = "Oops! You selected the same product twice. Please select two different products to check if they can be mixed.";
  } else {
    if ((product1 === "cleanser" && product2 === "toner") || (product1 === "toner" && product2 === "cleanser")) {
      resultMessage.textContent = "These products can be mixed. They work well together for cleansing and toning your skin.";
    } else if ((product1 === "cleanser" && product2 === "moisturizer") || (product1 === "moisturizer" && product2 === "cleanser")) {
      resultMessage.textContent = "These products can be mixed. They help cleanse and moisturize your skin.";
    } else if ((product1 === "cleanser" && product2 === "serum") || (product1 === "serum" && product2 === "cleanser")) {
      resultMessage.textContent = "These products can be mixed. They help cleanse and provide added nutrients to your skin.";
    } else if ((product1 === "toner" && product2 === "moisturizer") || (product1 === "moisturizer" && product2 === "toner")) {
      resultMessage.textContent = "These products can be mixed. They provide toning and moisturizing benefits to your skin.";
    } else if ((product1 === "toner" && product2 === "serum") || (product1 === "serum" && product2 === "toner")) {
      resultMessage.textContent = "These products can be mixed. They provide toning and added nutrients to your skin.";
    } else if ((product1 === "moisturizer" && product2 === "serum") || (product1 === "serum" && product2 === "moisturizer")) {
      resultMessage.textContent = "These products can be mixed. They provide moisturizing and added nutrients to your skin.";
    } else {
      resultMessage.textContent = "These products should not be mixed together. Mixing them may cause adverse effects on your skin.";
    }
  }
}
