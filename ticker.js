const COINS = [
  { l: "XRP", i: "ripple", d: 3 },
  { l: "XLM", i: "stellar", d: 4 },
  { l: "HBAR", i: "hedera-hashgraph", d: 4 },
  { l: "ALGO", i: "algorand", d: 4 },
  { l: "ADA", i: "cardano", d: 4 },
  { l: "ETH", i: "ethereum", d: 2 },
  { l: "BTC", i: "bitcoin", d: 2 },
];
async function updateTicker() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=" + COINS.map(c => c.i).join(",") + "&vs_currencies=usd&include_24hr_change=true");
    const data = await res.json();
    const items = COINS.map(c => {
      const p = data[c.i];
      if (!p) return c.l + ": --";
      const price = p.usd.toFixed(c.d);
      const change = p.usd_24h_change || 0;
      const color = change >= 0 ? "#00E676" : "#FF1744";
      const arrow = change >= 0 ? "\u25B2" : "\u25BC";
      return "<span style=\"color:#9CA3AF\">" + c.l + ":</span> <span style=\"color:#F3F4F6\">$" + price + "</span> <span style=\"color:" + color + "\">" + arrow + " " + Math.abs(change).toFixed(1) + "%</span>";
    });
    const html = items.join(" <span style=\"color:#00D9FFCC\">\u25C6</span> ") + " <span style=\"color:#00D9FFCC\">\u25C6</span> <span style=\"color:#FFD700\">HNT: SOVEREIGN WELLNESS TOKEN</span>";
    document.getElementById("af-ticker").innerHTML = html + " " + html;
  } catch (e) { console.error(e); }
}
updateTicker();
setInterval(updateTicker, 60000);
