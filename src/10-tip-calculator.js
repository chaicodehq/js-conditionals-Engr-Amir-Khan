/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here

  if(billAmount<=0 || serviceRating <1 || serviceRating >5 || !Number.isInteger(serviceRating)){

    return null;
  }

    
    
  const calculateTip = {
    tipPercentage:null,
    tipAmount:null,
    totalAmount:null
  }

 


   let tipAmounts = null;
   let percentage = 0;
  // let totalAmounts = 0;

  switch(serviceRating){
    case 1:
      calculateTip.tipPercentage = 5;
      percentage = 5;
      tipAmounts = Number((billAmount * percentage / 100).toFixed(2));
      calculateTip.tipAmount = tipAmounts
      calculateTip.totalAmount = Number((billAmount + tipAmounts).toFixed(2));
      break;

    case 2:
      calculateTip.tipPercentage = 10;
      percentage = 10;
      tipAmounts = Number((billAmount * percentage / 100).toFixed(2))
      calculateTip.tipAmount = tipAmounts
      calculateTip.totalAmount = Number((billAmount + tipAmounts).toFixed(2));
      break;
    case 3:
      calculateTip.tipPercentage = 15;
      percentage = 15
      tipAmounts = Number((billAmount * percentage /100).toFixed(2));
      calculateTip.tipAmount = tipAmounts
      calculateTip.totalAmount = Number((billAmount + tipAmounts).toFixed(2));
      break;

    case 4:
      calculateTip.tipPercentage = 20;
      percentage = 20;
      tipAmounts = Number((billAmount * percentage /100).toFixed(2));
      calculateTip.tipAmount = tipAmounts
      calculateTip.totalAmount = Number((billAmount + tipAmounts).toFixed(2))
      break;
    default:
      calculateTip.tipPercentage = 25;
      percentage = 25
      tipAmounts = Number((billAmount * percentage /100).toFixed(2));
      calculateTip.tipAmount = tipAmounts
      calculateTip.totalAmount = Number((billAmount + tipAmounts).toFixed(2))
  }
  



  return calculateTip;



  






















}
