---
title: Explainable & Generalizable Performance Modeling
thrust: perf # papers with thrust={perf} in papers.bib are listed on this page
order: 1
short: "Performance Modeling" # label used in publication filters
icon: fa-solid fa-microchip
summary: ML-based simulators, performance surrogates, and agentic AI that predict CPU, GPU, and accelerator performance quickly and explain why a design behaves the way it does.
questions:
  - How can learned performance models generalize to architectures and workloads they have never seen?
  - Which bottlenecks (dependencies, critical paths, resource contention) should a model explain, and how do we know the explanation is faithful?
  - Can agentic AI use performance models to explore architecture designs with only limited fine-tuning?
projects:
  - title: Event-driven explainable simulation
    text: Predict fine-grained microarchitectural events and derive cycles from them, exposing the bottleneck behind every prediction.
  - title: Hybrid analytical–ML models
    text: Combine analytical models with learned components and architecture-consistency constraints for label-efficient, generalizable prediction.
  - title: ML-based performance surrogates
    text: Fast learned surrogates of CPUs, GPUs, and AI accelerators, trained on simulator and RTL-level data, that transfer across hardware generations.
  - title: Agentic AI for performance modeling
    text: LLM agents that reason about microarchitecture, call performance models in the loop, and guide architecture design.
---

Cycle-level simulators are too slow to explore modern design spaces, and black-box ML predictors are fast but rarely tell an architect _why_ a design is slow. We build machine-learning-based simulators and performance models that are **fast, accurate, generalizable, and explainable**.

Our earlier work showed that deep learning can replace cycle-level simulation ([SimNet](/publications/#li2022simnet), [TAO](/publications/#pandey2024tao)) and scale it on GPUs, and that analytical and ML models can be fused for fast CPU performance modeling ([Concorde](/publications/#concorde2025), with Google). We now focus on ML-based performance surrogates that generalize to unseen architectures and accelerators, expose microarchitectural bottlenecks, and plug into existing simulators and agentic AI design workflows.
