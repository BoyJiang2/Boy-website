---
title: "FlashAttention: Fast and Memory-Efficient Exact Attention"
published: 2026-08-18
type: 论文
series: 高效大模型系统
draft: false
authors: Tri Dao et al.
venue: NeurIPS
year: 2022
summary: 通过分块与在线 softmax 减少 HBM 读写，在不近似 Attention 的前提下提升训练速度。
tags: [Attention, GPU, IO-Aware]
status: 精读中
order: 2
---

## 问题不在 FLOPs

标准 Attention 的主要痛点是中间矩阵频繁写回高带宽内存。FlashAttention 把计算重排到更贴近 SRAM 的块级操作中。

## 最值得记住的技巧

在线 softmax 维护运行中的最大值与归一化因子，因此不必存下完整的 score 矩阵。

## 实践连接

算法复杂度没有改变，但 IO 复杂度改变了。这是理解现代 GPU 算法时极其重要的视角。
