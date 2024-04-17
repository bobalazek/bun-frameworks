# Bun Frameworks

The accompanying code for my [🧄 Bun Frameworks](https://bobalazek.com/blog/0004-bun-frameworks) post on my blog.

## Installation

* Clone the repository
* Run `bun install` to install the dependencies
* Run `bun run ./benchmark.js` to run the benchmark

## Results

The results are in the blog post, but here they are for reference:

| Framework | Average RPS | Cold start (ms) | Average (ms) | Median (ms) | Mean (ms) | 75th perc. (ms) | 95th perc. (ms) | 99th perc. (ms) | Std. (ms) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| bun | 28585 | 22.850 | 0.035 | 0.033 | 0.035 | 0.035 | 0.044 | 0.070 | 0.021 |
| elysiajs | 28435 | 9.833 | 0.035 | 0.033 | 0.035 | 0.035 | 0.045 | 0.076 | 0.024 |
| hono | 28110 | 9.851 | 0.036 | 0.033 | 0.036 | 0.036 | 0.043 | 0.069 | 0.025 |
| hattip | 25647 | 3.858 | 0.039 | 0.035 | 0.039 | 0.039 | 0.056 | 0.087 | 0.029 |
| fastify | 22329 | 8.058 | 0.045 | 0.040 | 0.045 | 0.044 | 0.058 | 0.094 | 0.044 |
| koa | 21003 | 12.432 | 0.048 | 0.043 | 0.048 | 0.046 | 0.060 | 0.093 | 0.044 |
| h3 | 19922 | 13.009 | 0.050 | 0.044 | 0.050 | 0.049 | 0.072 | 0.115 | 0.040 |
| hapi | 18738 | 18.418 | 0.053 | 0.048 | 0.053 | 0.052 | 0.067 | 0.106 | 0.051 |
| express | 18331 | 9.765 | 0.055 | 0.049 | 0.055 | 0.053 | 0.071 | 0.116 | 0.047 |

## Notes

I also tried `hyper-express`, but that does not seem to be compatible with Bun. At least not at the time of doing this benchmark.
