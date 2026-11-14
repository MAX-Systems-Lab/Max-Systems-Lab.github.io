---
title: Representative Benchmarks & Workload Characterization
thrust: workload # papers with thrust={workload} in papers.bib are listed on this page
order: 3
short: "Benchmarks & Workloads" # label used in publication filters
icon: fa-solid fa-chart-column
summary: Understanding what real workloads do to hardware, and generating representative benchmarks that reproduce that behavior for architecture research.
questions:
  - Which workload characteristics actually determine performance across different architectures?
  - How can we generate small, representative benchmarks that behave like large or proprietary production workloads?
  - How do we share realistic workloads and traces without exposing sensitive code or data?
projects:
  - title: Workload characterization
    text: Profile AI, HPC, and datacenter workloads across CPUs, GPUs, and accelerators to find the features and bottlenecks that drive performance.
  - title: Representative benchmark generation
    text: Synthesize programs and traces that reproduce the behavior of real workloads, for faster and more realistic simulation and design-space exploration.
  - title: Privacy-preserving workload sharing
    text: Obfuscate or surrogate proprietary traces so they remain useful for performance evaluation without revealing the original program.
---

Architecture research is only as good as the workloads it is evaluated on. Standard benchmark suites age quickly, and the workloads that matter most, from LLM serving to production datacenter services, are often too large or too proprietary to share. We **characterize real workloads** to understand what drives their performance and build methods to **generate representative benchmarks** that capture that behavior, giving our performance models and simulators realistic data to learn from.
