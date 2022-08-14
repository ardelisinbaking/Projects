  const brittanysPanties = (price) => {
    let percentage = 12;
    let tax = price * (percentage / 100);
    let total = price + tax;
    console.log(`
    Brittany's Receipt (CAD)
    price: $${price}
    percentage: ${percentage}%
    tax: $${tax.toFixed(2)}
    total: $${total.toFixed(2)}
    `);
  };
  brittanysPanties(33.99);
  
  const brittanysInterprovincialPanties = function (price, province) {
    if (province == "BC") {
      var percentage = 12;
      let tax = price * (percentage / 100);
      let total = price + tax;
      console.log(`
      Brittany's BC Panties Receipt
      Price: $: ${price}
      Province: : ${province}
      Tax %: : ${percentage}%
      Tax: : $${tax.toFixed(2)}
      Total: : ${total.toFixed(2)}
      `);
    } else if (province == "Quebec") {
      var percentage = 14.975;
      let tax = price * (percentage / 100);
      let total = price + tax;
      console.log(`
      Brittany's Quebec Panties Receipt
      Price: $: ${price}
      Province: : ${province}
      Tax %: : ${percentage}%
      Tax: : $${tax.toFixed(2)}
      Total: : ${total.toFixed(2)}
      `);
    } else if (province == "Ontario") {
      var percentage = 13;
      let tax = price * (percentage / 100);
      let total = price + tax;
      console.log(`
      Brittany's Ontario Panties Receipt
      Price: $: ${price}
      Province: : ${province}
      Tax %: : ${percentage}%
      Tax: : $${tax.toFixed(2)}
      Total: : ${total.toFixed(2)}
      `);
    } else {
      console.error("Brittany does not shop there.");
    }
  };
  
  brittanysInterprovincialPanties(32.99, "BC");
  brittanysInterprovincialPanties(32.99, "Quebec");
  brittanysInterprovincialPanties(32.99, "Ontario");
  brittanysInterprovincialPanties(32.99, "Alberta");
  
  /*
  const brittanysInterprovincialPanties = (price, province) => {
    if (province === "BC") {
      var percentage = 12;
    }
    if (province === "Quebec") {
      var percentage = 14.975;
    }
    if (province === "Ontario") {
      var percentage = 13;
    }
    let tax = price * (percentage / 100);
    let total = price + tax;
    console.log(`
    Brittany's Interprovincial Panties Receipt
    Price: $: ${price}
    Province: : ${province}
    Tax %: : ${percentage}%
    Tax: : $${tax}
    Total: : ${total.toFixed(2)}
    `);
  };/*