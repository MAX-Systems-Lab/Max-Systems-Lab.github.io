---
title: Systems for Large-Scale Retrieval & Graph Analytics
thrust: data
order: 4
short: "Retrieval & Graphs" # label used in publication filters
icon: fa-solid fa-diagram-project
summary: Hardware/software co-design for retrieval-augmented generation, vector search, and graph processing at scale.
questions:
  - How should retrieval pipelines (indexing, vector search, generation) be co-designed with hardware to meet latency and throughput targets?
  - Can we model the end-to-end performance of RAG serving systems before deploying them?
  - How do large-scale graph and table representations connect to applications such as recommendation and bioinformatics?
projects:
  - title: RAG serving optimization
    text: End-to-end performance modeling and optimization of retrieval-augmented generation pipelines.
  - title: Vector search and ANNS indexing
    text: Fast graph-based index construction and billion-scale vector search on modern CPUs and GPUs.
  - title: Graph and temporal-graph engines
    text: GPU graph sampling, random walks, triangle counting, and subgraph matching (C-SAW, TEA, TRUST, H-index).
  - title: Retrieval for program traces
    text: Applying retrieval systems to large collections of program and performance traces.
---

Retrieval-augmented generation, recommendation, genome read mapping, and graph analytics all depend on moving and searching massive irregular data quickly. Building on our work on **GPU graph processing**, we co-design algorithms, data representations, and hardware for scalable retrieval and graph systems.
