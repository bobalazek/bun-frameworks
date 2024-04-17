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

export const getMinAndMaxValuesForTable = (table) => {
  const values = table.slice(1).map(row => {
    return row.map(cell => parseFloat(cell));
  });

  return {
    min: Math.min(...values),
    max: Math.max(...values),
  };
}

// Export helpers
export const exportMdTable = (table) => {
  const rows = [];
  for (let i = 0; i < table.length; i++) {
    const row = table[i];
    rows.push(`| ${row.join(' | ')} |`);

    if (i === 0) {
      rows.push(`| ${row.map(() => '---').join(' | ')} |`);
    }
  }

  return rows.join('\n');
}

export const exportHtmlTable = (table) => {
  const headRow = table[0];
  const bodyRows = [];
  for (let i = 1; i < table.length; i++) {
    const row = table[i];

    let rowString = '<tr>';
    for (const cell of row) {
      rowString += `<td>${cell}</td>`;
    }
    rowString += '</tr>';

    bodyRows.push(rowString);
  }

  return `<table>
  <thead><tr>${headRow.map(cell => `<th>${cell}</th>`).join('')}</tr></thead>
  <tbody>${bodyRows.join('')}</tbody>
</table>`;
}
