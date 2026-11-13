---
title: AI-Driven Program & Compiler Optimization
thrust: compiler
order: 2
short: "Programs & Compilers" # label used in publication filters
icon: fa-solid fa-code
summary: Understanding programs from an architectural perspective so they can be optimized automatically across heterogeneous hardware.
questions:
  - How do we learn program representations that stay robust to input and architecture changes, and work with proprietary code?
  - What does it mean for two programs to be similar in performance, both semantically and syntactically?
  - How can we optimize for a brand-new hardware target without years of hand-tuned compiler heuristics?
projects:
  - title: Architecture-aware program representations
    text: Embeddings of programs and execution traces that capture how code interacts with the microarchitecture.
  - title: Program similarity via contrastive learning
    text: Similarity definitions grounded in performance behavior, learned from contrastive examples.
  - title: Representative and privacy-preserving workloads
    text: Generate synthetic programs and traces that reproduce real (including proprietary) workloads for evaluation.
  - title: Learned cost models for compilers
    text: Cost models for tensor programs on TPUs and GPUs, and analytical-then-learned cost models for heterogeneous loop scheduling in MLIR.
---

Program and compiler optimizations increasingly depend on the hardware they target, and heterogeneous systems multiply the number of targets. We study how to represent programs from an **architectural perspective** and use those representations for performance prediction, similarity search, representative benchmark generation, and automatic compiler and program optimization.
