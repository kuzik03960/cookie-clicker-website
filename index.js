// Initialize variables
var cookieCount = 0;
var upgradeCost = 10;
var upgradeLevel = 0;

// Function to handle cookie clicking
function clickCookie() {
  cookieCount++;
  updateDisplay();
}

// Function to handle buying upgrades
function buyUpgrade() {
  if (cookieCount >= upgradeCost) {
    cookieCount -= upgradeCost;
    upgradeLevel++;
    upgradeCost += 10;
    updateDisplay();
  } else {
    alert("Not enough cookies to buy the upgrade!");
  }
}

// Function to update the display
function updateDisplay() {
  document.getElementById('cookieCount').innerHTML = "Cookies: " + cookieCount;
  document.getElementById('upgradeLevel').innerHTML = "Upgrade Level: " + upgradeLevel;
  document.getElementById('buyUpgradeButton').innerHTML = "Buy Upgrade (Cost: " + upgradeCost + " cookies)";
}