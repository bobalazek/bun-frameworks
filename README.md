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
| elysiajs | 28858 | 11.551 | 0.035 | 0.032 | 0.035 | 0.035 | 0.043 | 0.068 | 0.024 |
| bun | 28645 | 22.723 | 0.035 | 0.032 | 0.035 | 0.035 | 0.044 | 0.070 | 0.024 |
| hono | 27766 | 7.197 | 0.036 | 0.033 | 0.036 | 0.036 | 0.046 | 0.079 | 0.024 |
| hattip | 27282 | 6.697 | 0.037 | 0.034 | 0.037 | 0.037 | 0.045 | 0.072 | 0.028 |
| fastify | 22820 | 11.607 | 0.044 | 0.040 | 0.044 | 0.043 | 0.054 | 0.086 | 0.041 |
| koa | 21114 | 11.035 | 0.047 | 0.043 | 0.047 | 0.046 | 0.059 | 0.090 | 0.046 |
| h3 | 20991 | 19.083 | 0.048 | 0.044 | 0.048 | 0.047 | 0.060 | 0.089 | 0.036 |
| express | 18824 | 15.741 | 0.053 | 0.048 | 0.053 | 0.052 | 0.065 | 0.098 | 0.049 |

## Notes

I also tried `hyper-express`, but that does not seem to be compatible with Bun. At least not at the time of doing this benchmark.
