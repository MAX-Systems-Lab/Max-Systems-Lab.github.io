---
title: Heterogeneous & Agentic AI Systems
thrust: hetero
order: 3
short: "Heterogeneous & AI Systems" # label used in publication filters
icon: fa-solid fa-server
summary: Mapping, scheduling, and forecasting the performance of AI and HPC workloads on heterogeneous, evolving systems.
questions:
  - Which accelerator best fits each stage of an agentic AI pipeline that mixes LLM calls, retrieval, and tool use?
  - Will a bottleneck observed at small scale persist when an application runs at scale or on new hardware?
  - How can schedulers use dynamic resource-utilization profiles to improve HPC and cloud efficiency?
projects:
  - title: Workload-to-hardware mapping
    text: Match the components of AI and agentic pipelines to the CPUs, GPUs, and AI accelerators they run best on.
  - title: Performance portability and forecasting
    text: Predict how kernels and applications behave across GPU generations and new accelerators, and at larger scales.
  - title: Profile-driven scheduling for HPC and cloud
    text: Use learned resource-utilization profiles for job scheduling and resource management.
  - title: Efficient transformer systems
    text: Hardware-efficient transformer inference on FPGAs and GPUs (FTRANS, E.T.).
---

Modern systems combine CPUs, GPUs, specialized accelerators, and heterogeneous memories, and today's AI workloads, especially **agentic pipelines** that interleave LLM inference, retrieval, tool invocation, and multi-agent coordination, have very different compute, memory, and synchronization profiles. No single accelerator fits them all. We build models and runtime techniques that decide where work should run, forecast performance across hardware and scale, and keep large HPC and cloud systems efficient.
