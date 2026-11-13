---
title: Secure Hardware/Software Co-Design
thrust: security
order: 5
short: "Hardware Security" # label used in publication filters
icon: fa-solid fa-shield-halved
summary: Quantifying and improving the security–performance trade-offs of hardware and trusted execution environments.
questions:
  - What does security cost in performance for trusted execution environments on CPUs and GPUs, and where does the overhead come from?
  - How can we benchmark proprietary applications inside TEEs without exposing them?
  - Can hardware signals such as performance counters reliably detect attacks, and when do they mislead?
projects:
  - title: Performance–security trade-offs in TEEs
    text: Characterize and model TrustZone, SGX, and confidential-computing overheads, including confidential LLM inference.
  - title: Privacy-preserving benchmarking
    text: Tools that generate representative benchmarks for proprietary applications to evaluate trusted execution.
  - title: Security-aware design-space exploration
    text: Treat security and verification cost as first-class objectives when exploring microarchitecture designs.
  - title: Explainable ML for secure co-design
    text: Interpretable models of program–architecture interactions that lead to vulnerabilities.
---

Security features change how hardware performs, and performance features can open security holes. We study **program–architecture interactions** to quantify security in hardware/software co-design, evaluate trusted execution environments, and make security a first-class objective in architecture design-space exploration.
