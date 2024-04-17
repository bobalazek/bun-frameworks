import { average, median, mean, nthPercentile, standardDeviation, exportMdTable, exportHtmlTable } from './utils.js';

const argv = process.argv.slice(2);

const serverWaitTimeoutMs = 1000;

const frameworks = [
  {
    name: 'bun',
    file: 'bun.js',
  },
  {
    name: 'elysiajs',
    file: 'elysiajs.js',
  },
  {
    name: 'hono',
    file: 'hono.js',
  },
  {
    name: 'h3',
    file: 'h3.js',
  },
  {
    name: 'hattip',
    file: 'hattip.js',
  },
  {
    name: 'express',
    file: 'express.js',
  },
  {
    name: 'fastify',
    file: 'fastify.js',
  },
  {
    name: 'koa',
    file: 'koa.js',
  },
  {
    name: 'hapi',
    file: 'hapi.js',
  },
];
const requestsCount = 100000;
const requestDurationsMap = {};

console.log('========== Starting the benchmark ... ==========');

let currentServerPid = null;
process.on('exit', () => {
  // In case it does not terminate correctly
  if (currentServerPid) {
    process.kill(currentServerPid);
  }
});

for (let framework of frameworks) {
  console.log(`---------- Benchmarking "${framework.name}" ... ----------`);

  const requestDurations = [];

  const child = Bun.spawn(["bun", "run", `./frameworks/${framework.file}`], {
    env: {
      ...process.env,
      NODE_ENV: 'production',
    }
  });
  currentServerPid = child.pid;
  console.log(`Spawned server process with PID: ${child.pid}. Wait 2 seconds to ensure the server is running ...`);

  await new Promise((resolve) => {
    setTimeout(resolve, serverWaitTimeoutMs);
  });

  console.log('Server is running. Starting the benchmark ...')

  for (let i = 0; i < requestsCount; i++) {
    const start = process.hrtime();
    await fetch('http://localhost:3000');
    const end = process.hrtime(start);

    const durationMiliseconds = (end[0]*1000) + (end[1] / 1000000);
    requestDurations.push(durationMiliseconds);
  }

  requestDurationsMap[framework.name] = requestDurations;

  console.log(`Benchmarking for "${framework.name}" finished. Terminating the server process ...`);
  process.kill(child.pid);
  currentServerPid = null;
}

console.log('========== Benchmark finished ==========');

console.log('========== Results ==========');

const table = [
  [
    'Framework',
    'Average RPS',
    'Cold start (ms)',
    'Average (ms)',
    'Median (ms)',
    'Mean (ms)',
    '75th perc. (ms)',
    '95th perc. (ms)',
    '99th perc. (ms)',
    'Std. (ms)'
  ],
];

for (const framework of frameworks) {
  const allDurations = requestDurationsMap[framework.name];
  const coldStartDuration = allDurations[0];
  const durations = allDurations.slice(1);

  const avg = average(durations);
  const rps = 1000 / avg;
  const med = median(durations);
  const mea = mean(durations);
  const percentile75 = nthPercentile(durations, 75);
  const percentile95 = nthPercentile(durations, 95);
  const percentile99 = nthPercentile(durations, 99);
  const sdDev = standardDeviation(durations);

  table.push([
    framework.name,
    rps.toFixed(0),
    coldStartDuration.toFixed(3),
    avg.toFixed(3),
    med.toFixed(3),
    mea.toFixed(3),
    percentile75.toFixed(3),
    percentile95.toFixed(3),
    percentile99.toFixed(3),
    sdDev.toFixed(3),
  ]);
}

// Let's sort the table by the average requests per second
table.sort((a, b) => {
  return b[1] - a[1];
});

console.table(table);

if (argv.includes('--export-md-table')) {
  console.log('Exporting the results to a markdown table ...');
  const mdTable = exportMdTable(table);
  console.log(mdTable);
}

if (argv.includes('--export-html-table')) {
  console.log('Exporting the results to an HTML table ...');
  const htmlTable = exportHtmlTable(table);
  console.log(htmlTable);
}

console.log('========== Done ==========');
