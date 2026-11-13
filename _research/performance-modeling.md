---
title: Explainable & Generalizable Performance Modeling
thrust: perf # papers with thrust={perf} in papers.bib are listed on this page
order: 1
short: "Performance Modeling" # label used in publication filters
icon: fa-solid fa-microchip
summary: Learned simulators and performance models that predict CPU/GPU performance quickly and explain why a design behaves the way it does.
questions:
  - How can learned performance models generalize to architectures and workloads they have never seen?
  - Which bottlenecks (dependencies, critical paths, resource contention) should a model explain, and how do we know the explanation is faithful?
  - Can LLMs act as performance agents for architecture design-space exploration with only limited fine-tuning?
projects:
  - title: Event-driven explainable simulation
    text: Instead of mapping instructions straight to cycles, predict fine-grained microarchitectural events and derive cycles from them, exposing the bottleneck behind every prediction.
  - title: Hybrid analytical–ML models
    text: Combine analytical models with learned components and architecture-consistency constraints (in the spirit of physics-informed learning) for label-efficient, generalizable prediction.
  - title: Modular and architecture-aware models
    text: Architecture-aware mixtures of experts and component-level models that can be retrained separately as systems evolve.
  - title: LLM performance agents
    text: Benchmarks of microarchitecture reasoning where today's LLMs fail, and LLM agents that guide architecture design with a performance model in the loop.
  - title: Learning from RTL
    text: Train simulators on cycle-accurate RTL data (e.g., FPGA-accelerated simulation) rather than only cycle-level simulators, and build surrogate models of real processors.
---

Cycle-level simulators are too slow to explore modern design spaces, and black-box ML predictors are fast but rarely tell an architect _why_ a design is slow. We build machine-learning-based simulators and performance models that are **fast, accurate, generalizable, and explainable**.

Our earlier work showed that deep learning can replace cycle-level simulation ([SimNet](/publications/#li2022simnet), [TAO](/publications/#pandey2024tao)) and scale it on GPUs, and that analytical and ML models can be fused for fast CPU performance modeling ([Concorde](/publications/#concorde2025), with Google). We now focus on models that generalize to unseen architectures, expose microarchitectural bottlenecks, and plug into existing simulators and LLM-based design agents.
