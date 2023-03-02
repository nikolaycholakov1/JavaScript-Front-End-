function buyBitcoin(goldMined) {
  const goldPrice = 67.51;
  const bitcoinPrice = 11949.16;
  let totalGoldMined = 0;
  let bitcoins = 0;
  let firstBitcoinDay = 0;

  for (let day = 0; day < goldMined.length; day++) {
    let dailyGold = Number(goldMined[day]) * goldPrice;

    if ((day + 1) % 3 === 0) {
      dailyGold *= 0.7;
    }

    totalGoldMined += dailyGold;
    while (bitcoinPrice <= totalGoldMined) {
      bitcoins += 1;
      totalGoldMined -= bitcoinPrice;

      if (bitcoins === 1) {
        firstBitcoinDay = day + 1;
      }
    }
  }
  console.log(`Bought bitcoins: ${bitcoins}`);
  if (bitcoins > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
  }
  console.log(`Left money: ${totalGoldMined.toFixed(2)} lv.`);
}

// buyBitcoin([100, 200, 300]);
// buyBitcoin([50, 100]);
buyBitcoin([3124.15, 504.212, 2511.124]);
