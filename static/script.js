fetch("/api/merchants")
  .then((response) => response.json())
  .then((data) => {
    const merchantList = document.getElementById("merchant-list");
    const merchantCount = document.getElementById("merchant-count");
    const totalSales = document.getElementById("total-sales");

    const merchants = data.merchants;

    // Total merchants
    merchantCount.textContent = merchants.length;

    // Total monthly sales
    const sales = merchants.reduce(
      (total, merchant) => total + merchant.monthly_sales,
      0,
    );

    totalSales.textContent = `₹${sales.toLocaleString("en-IN")}`;

    // Merchant cards
    merchantList.innerHTML = "";

    merchants.forEach((merchant) => {
      const merchantCard = document.createElement("div");

      merchantCard.className = "merchant-card";

      merchantCard.innerHTML = `
                <h3>${merchant.name}</h3>
                <p>Business: ${merchant.business}</p>
                <p>Monthly Sales: ₹${merchant.monthly_sales.toLocaleString("en-IN")}</p>
            `;

      merchantList.appendChild(merchantCard);
    });
  })
  .catch((error) => {
    console.error("Error loading merchants:", error);

    document.getElementById("merchant-list").textContent =
      "Unable to load merchant data.";
  });
