// Initialize variables
let cookieCount = 0;
let upgradeCost = 10;
let upgradeLevel = 0;

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
    document.getElementById('cookieCount').innerHTML = `Cookies: ${cookieCount}`;
    document.getElementById('upgradeLevel').innerHTML = `Upgrade Level: ${upgradeLevel}`;
    document.getElementById('buyUpgradeButton').innerHTML = `Buy Upgrade (Cost: ${upgradeCost} cookies)`;
}

// Function to calculate the auto-generate rate based on the upgrade level
function calculateAutoGenerateRate() {
    const baseRate = 0.1; // Adjust this value as needed
    const baseMultiplier = 1; // Adjust this value as needed

    // Use a better multiplier based on the upgrade level
    const betterMultiplier = baseMultiplier + (upgradeLevel / 10); // You can adjust the divisor to control the rate of increase

    return baseRate * betterMultiplier;
}

// Function to automatically generate cookies
function autoGenerateCookies() {
    setInterval(function() {
        // Calculate the auto-generate rate based on the upgrade level
        const autoGenerateRate = calculateAutoGenerateRate();

        // Increment cookies based on the auto-generate rate
        cookieCount += autoGenerateRate;

        // Round the cookie count to 2 decimal places (adjust as needed)
        cookieCount = parseFloat(cookieCount.toFixed(2));

        // Update the display
        updateDisplay();
    }, 1000); // Check and generate cookies every second
}

// Call the autoGenerateCookies function
autoGenerateCookies();
