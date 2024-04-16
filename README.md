# Bun Frameworks

The accompanying code for my [🧄 Bun Framework Performances](https://bobalazek.com/blog/0004-bun-frameworks) post on my blog.

## Installation

* Clone the repository
* Run `bun install` to install the dependencies
* Run `bun run ./benchmark.js` to run the benchmark

## Results

The results are in the blog post, but here they are for reference:

│ Framework │ Average Reqests Per Second │ Cold Start (ms) │ Average (ms) │ Median (ms) │ Mean (ms) │ 75th Percentile (ms) │ 95th Percentile (ms) │ 99th Percentile (ms) │ Standard Deviation (ms) │
| --------- | -------------------------- | --------------- | ------------- | ------------ | ---------- | -------------------- | -------------------- | -------------------- | ----------------------- |
│ elysiajs  │ 28472                      │ 9.6227          │ 0.0351       │ 0.0324      │ 0.0351    │ 0.0352               │ 0.0451               │ 0.0716               │ 0.0259                  │
│ bun       │ 28145                      │ 23.4625         │ 0.0355       │ 0.0327      │ 0.0355    │ 0.0357               │ 0.0467               │ 0.0734               │ 0.0253                  │
│ hono      │ 28087                      │ 8.2647          │ 0.0356       │ 0.0329      │ 0.0356    │ 0.0357               │ 0.0460               │ 0.0732               │ 0.0250                  │
│ hattip    │ 26869                      │ 6.8641          │ 0.0372       │ 0.0342      │ 0.0372    │ 0.0374               │ 0.0480               │ 0.0754               │ 0.0264                  │
│ fastify   │ 22320                      │ 14.7565         │ 0.0448       │ 0.0405      │ 0.0448    │ 0.0438               │ 0.0592               │ 0.0917               │ 0.0416                  │
│ h3        │ 20510                      │ 11.1802         │ 0.0488       │ 0.0440      │ 0.0488    │ 0.0479               │ 0.0645               │ 0.0975               │ 0.0367                  │
│ express   │ 18427                      │ 14.4568         │ 0.0543       │ 0.0484      │ 0.0543    │ 0.0532               │ 0.0705               │ 0.1039               │ 0.0517                  │

## Notes

I did actually also try `hyper-express`, but that does not seem to be compatible with Bun. At least not yet.
