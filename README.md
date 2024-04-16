# Bun Frameworks

The accompanying code for my [🧄 Bun Framework Performances](https://bobalazek.com/blog/0004-bun-frameworks) post on my blog.

## Installation

* Clone the repository
* Run `bun install` to install the dependencies
* Run `bun run ./benchmark.js` to run the benchmark

## Results

The results are in the blog post, but here they are for reference:

| Framework | Average RPS | Cold Start (ms) | Average (ms) | Median (ms) | Mean (ms) | 75th perc. (ms) | 95th perc. (ms) | 99th perc. (ms) | SD (ms) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| bun | 28670 | 16.597 | 0.035 | 0.032 | 0.035 | 0.035 | 0.043 | 0.069 | 0.024 |
| elysiajs | 28647 | 9.923 | 0.035 | 0.033 | 0.035 | 0.035 | 0.043 | 0.067 | 0.025 |
| hono | 28082 | 8.449 | 0.036 | 0.033 | 0.036 | 0.036 | 0.043 | 0.069 | 0.024 |
| hattip | 26960 | 4.509 | 0.037 | 0.034 | 0.037 | 0.037 | 0.047 | 0.076 | 0.027 |
| fastify | 22383 | 12.438 | 0.045 | 0.040 | 0.045 | 0.044 | 0.059 | 0.091 | 0.045 |
| h3 | 21019 | 10.533 | 0.048 | 0.044 | 0.048 | 0.047 | 0.059 | 0.089 | 0.035 |
| express | 18189 | 6.380 | 0.055 | 0.049 | 0.055 | 0.054 | 0.073 | 0.111 | 0.055 |

## Notes

I did actually also try `hyper-express`, but that does not seem to be compatible with Bun. At least not yet.
