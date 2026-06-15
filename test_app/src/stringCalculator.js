export function add(numbers) {
  if (numbers === "") return 0;

  let delimiterRegex = /,|\n/;
  let content = numbers;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const delimiterPart = parts[0];
    content = parts[1];

    const delimiters = [...delimiterPart.matchAll(/\[(.*?)\]/g)].map(
      (match) => match[1],
    );

    if (delimiters.length > 0) {
      delimiterRegex = new RegExp(delimiters.map(escapeRegex).join("|"));
    } else {
      delimiterRegex = new RegExp(escapeRegex(delimiterPart.substring(2)));
    }
  }

  const parsedNumbers = content
    .split(delimiterRegex)
    .map(Number)
    .filter((n) => n <= 1000);

  const negatives = parsedNumbers.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return parsedNumbers.reduce((sum, n) => sum + n, 0);
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
