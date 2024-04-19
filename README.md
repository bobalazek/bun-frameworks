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
| bun | 28378 | 16.490 | 0.035 | 0.032 | 0.035 | 0.035 | 0.048 | 0.073 | 0.023 |
| elysiajs | 28232 | 11.673 | 0.035 | 0.033 | 0.035 | 0.035 | 0.046 | 0.070 | 0.025 |
| hono | 27219 | 12.308 | 0.037 | 0.033 | 0.037 | 0.036 | 0.049 | 0.098 | 0.028 |
| hattip | 26959 | 9.204 | 0.037 | 0.034 | 0.037 | 0.037 | 0.049 | 0.073 | 0.027 |
| baojs | 24955 | 7.316 | 0.040 | 0.036 | 0.040 | 0.040 | 0.053 | 0.080 | 0.032 |
| fastify | 22142 | 8.940 | 0.045 | 0.041 | 0.045 | 0.044 | 0.061 | 0.095 | 0.042 |
| h3 | 20303 | 9.104 | 0.049 | 0.044 | 0.049 | 0.048 | 0.065 | 0.103 | 0.047 |
| koa | 19797 | 12.234 | 0.051 | 0.044 | 0.051 | 0.048 | 0.072 | 0.111 | 0.054 |
| hapi | 18419 | 17.832 | 0.054 | 0.048 | 0.054 | 0.053 | 0.073 | 0.110 | 0.053 |
| express | 18263 | 15.221 | 0.055 | 0.049 | 0.055 | 0.054 | 0.072 | 0.104 | 0.053 |

## Notes

I also tried `hyper-express`, but that does not seem to be compatible with Bun. At least not at the time of doing this benchmark.
