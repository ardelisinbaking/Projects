  const province = {
    bc: {
      tax: 12,
      location: "BC",
    },
    quebec: {
      tax: 14.975,
      location: "Quebec",
    },
    ontario: {
      tax: 13,
      location: "Ontario",
    },
  };
  const taxCalculator = function (price, province) {
    let actualTax = price * (province.tax / 100);
    let total = price + actualTax;
    console.log(`
    Brittany's Interprovincial Receipt
    Price: $${price}
    Province: ${province.location}
    Tax %: ${province.tax}%
    Tax: $${actualTax.toFixed(2)}
    Total: $${total.toFixed(2)}
    `);
  };
  taxCalculator(42.98, province.quebec);
  
  /*
  const province = {
    bc: 12,
    quebec: 14.975,
    ontario: 13,
    provinceIndicator: (bc, quebec, ontario) {
      this.bc = bc;
      this.quebec = quebec;
      this.ontario = ontario;
    },
  };*/