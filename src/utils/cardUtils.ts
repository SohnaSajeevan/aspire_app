export function generateCardNumber(): string {
  // Generate a random 16-digit number starting with 4 (Visa)
  let cardNumber = "4";
  for (let i = 0; i < 15; i++) {
    cardNumber += Math.floor(Math.random() * 10).toString();
  }
  return cardNumber;
}

export function generateExpiryDate(): string {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // Generate a random month (1-12)
  const month = Math.floor(Math.random() * 12) + 1;

  // Generate a random year between current year + 1 and current year + 5
  const yearOffset = Math.floor(Math.random() * 5) + 1;
  const year = (currentYear + yearOffset) % 100; // Get last two digits

  // Format as MM/YY
  return `${month.toString().padStart(2, "0")}/${year
    .toString()
    .padStart(2, "0")}`;
}
