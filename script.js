function checkMix() {
  const product1 = document.getElementById("product1").value;
  const product2 = document.getElementById("product2").value;
  const resultMessage = document.getElementById("result");

  // Enable all options in the drop-down menus
  const product1Options = document.getElementById("product1").options;
  const product2Options = document.getElementById("product2").options;
  for (let i = 0; i < product1Options.length; i++) {
    product1Options[i].disabled = false;
    product2Options[i].disabled = false;
  }

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
    }  else if ((product1 === "vitamin c" && product2 === "retinol") || (product1 === "retinol" && product2 === "vitamin c")) {
      resultMessage.textContent = "These products should not be mixed. These two active ingredients can cause irritation and sensitivity when used together.";
    }  else if ((product1 === "benzoyl peroxide" && product2 === "retinol") || (product1 === "retinol" && product2 === "benzoyl peroxide")) {
      resultMessage.textContent = "These products should not be mixed. Mixing these can lead to excessive dryness and irritation.";
    }  else if ((product1 === "vitamin c" && product2 === "niacinamide") || (product1 === "niacinamide" && product2 === "vitamin c")) {
      resultMessage.textContent = "These products should not be mixed. These two ingredients can cancel each other out and reduce effectiveness when used together.";
    } else if ((product1 === "niacinamide" && product2 === "retinol") || (product1 === "retinol" && product2 === "niacinamide")) {
      resultMessage.textContent = "These products should not be mixed. Using both can cause flushing or redness in some individuals.";
    } else if ((product1 === "retinol" && product2 === "aha") || (product1 === "aha" && product2 === "retinol")) {
      resultMessage.textContent = "These products should not be mixed. This combination can lead to excessive irritation and redness.";
    } else if ((product1 === "benzoyl peroxide" && product2 === "salicylic acid") || (product1 === "salicylic acid" && product2 === "benzoyl peroxide")) {
      resultMessage.textContent = "These products should not be mixed. Using both can lead to dryness and irritation.";
    } else if ((product1 === "hydroquine" && product2 === "vitamin c") || (product1 === "vitamin c" && product2 === "hydroquine")) {
      resultMessage.textContent = "These products should not be mixed. Using both can lead to skin sensitivity and reduce their effectiveness.";
    } else if ((product1 === "aha" && product2 === "bha") || (product1 === "bha" && product2 === "aha")) {
      resultMessage.textContent = "These products should not be mixed.  Both AHA and BHA are exfoliating acids and using them together can lead to excessive exfoliation and skin irritation.";
    } else if ((product1 === "retinol" && product2 === "bha") || (product1 === "bha" && product2 === "retinol")) {
      resultMessage.textContent = "These products should not be mixed. Using BHA and retinol together can lead to skin irritation and sensitivity.";
    } else if ((product1 === "vitamin c" && product2 === "salicylic acid") || (product1 === "salicyc acid" && product2 === "vitamin c")) {
      resultMessage.textContent = "These products should not be mixed. The combination of vitamin C and salicylic acid may cause skin irritation and dryness.";
    } else if ((product1 === "resorcinol" && product2 === "vitamin c") || (product1 === "vitamin c" && product2 === "resorcinol")) {
      resultMessage.textContent = "These products should not be mixed. The combination of vitamin C and resorcinol may lead to skin irritation and adverse reactions.";
    } else if ((product1 === "hydroquine" && product2 === "resorcinol") || (product1 === "resorcinol" && product2 === "hydroquine")) {
      resultMessage.textContent = "These products should not be mixed. Using hydroquinone and resorcinol together can cause skin irritation and potential side effects.";
    } else if ((product1 === "retinol" && product2 === "resorcinol") || (product1 === "resorcinol" && product2 === "retinol")) {
      resultMessage.textContent = "These products should not be mixed. Combining retinol and resorcinol may increase the risk of skin irritation and sensitivity.";
    } else if ((product1 === "retinol" && product2 === "squalane") || (product1 === "squalane" && product2 === "retinol")) {
      resultMessage.textContent = "These products should not be mixed. The combination may reduce the effectiveness of both ingredients, leading to less effective results for your skin.";
    } else if ((product1 === "squalane" && product2 === "vitamin c") || (product1 === "vitamin c" && product2 === "squalane")) {
      resultMessage.textContent = "These products should not be mixed. When combined may reduce its effectiveness, as they can neutralize each other's benefits.";
    } else if ((product1 === "benzoyl peroxide" && product2 === "squalane") || (product1 === "squalane" && product2 === "benzoyl peroxide")) {
      resultMessage.textContent = "These products should not be mixed. Using both can lead to excessive dryness and irritation, especially for acne-prone or sensitive skin.";
    } else if ((product1 === "niacinamide" && product2 === "squalane") || (product1 === "squalane" && product2 === "niacinamide")) {
      resultMessage.textContent = "These products should not be mixed. The combination can cause flushing or redness, particularly for individuals with sensitive skin.";
    } else if ((product1 === "squalane" && product2 === "hydroquinone") || (product1 === "hydroquinone" && product2 === "squalane")) {
      resultMessage.textContent = "These products should not be mixed. Combining both can may lead to skin sensitivity and reduce the effectiveness of both products.";
    }
    
    
    
    
    else {
      resultMessage.textContent = "These products should not be mixed together. Mixing them may cause adverse effects on your skin.";
    }
     // Disable the options that are not in the result message
    for (let i = 0; i < product1Options.length; i++) {
      if (product1Options[i].value !== product1 && product1Options[i].value !== product2) {
        product1Options[i].disabled = true;
      }
      if (product2Options[i].value !== product1 && product2Options[i].value !== product2) {
        product2Options[i].disabled = true;
      }
    }
  }
}
