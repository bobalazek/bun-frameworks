export const average = (values) => {
  const sum = values.reduce((acc, value) => acc + value, 0);
  return sum / values.length;
}

export const median = (values) => {
  const sorted = values.slice().sort();
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }

  return sorted[middle];
}

export const mean = (values) => {
  const sum = values.reduce((acc, value) => acc + value, 0);
  return sum / values.length;
}

export const nthPercentile = (values, n) => {
  const sorted = values.slice().sort();
  const index = Math.floor((n / 100) * sorted.length);
  return sorted[index];
}

export const standardDeviation = (values) => {
  const avg = average(values);
  const sum = values.reduce((acc, value) => acc + Math.pow(value - avg, 2), 0);
  return Math.sqrt(sum / values.length);
}
