function submitForm() {
    let weight = Number(document.getElementById("packageWeight").value);
    let zone = document.getElementById("placeHolder").value;
    let isExpressDelivery = document.getElementById("checkDestination").checked;

    let baseCost = 500;  // starting base cost

    // Check if weight is valid
    if (weight < 1) {
      document.getElementById("result").innerText = "Weight must be at least 1kg.";
      return; // stop execution
    }

    // Add cost by zone
    if (zone === "nigeria") {
      baseCost += 1000;
    }
    if (zone === "cameron") {
      baseCost += 2000;
    }
    if (zone === "egypt") {
      baseCost += 1500;
    }
    if (zone === "france") {
      baseCost += 3000;
    }

    // Add money for weight (every kg after 1kg adds N500 for example)
    if (weight > 1) {
      baseCost += (weight - 1) * 500;
    }

    // Express delivery surcharge
    if (isExpressDelivery) {
      baseCost = baseCost * 1.5;
    }

    // Display result
    let message = `The total shipping cost for your ${weight}kg package to ${zone} is N${baseCost}`;
    console.log(message);
    document.getElementById("result").innerText = message;
  }