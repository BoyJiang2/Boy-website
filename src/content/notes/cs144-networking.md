---
title: 从字节流到可靠传输
summary: 把 TCP 看作一组可组合的状态机，而不是一堆 API。
published: 2026-08-10
updated: 2026-08-21
type: 课程
series: Stanford CS144
draft: false
course: Stanford CS144
period: Winter 2024
duration: 8 个 Checkpoint
tags: [网络, TCP, 系统]
order: 1
---

## 这门课真正要回答的问题

TCP 的难点不在于记住报文头，而在于：当顺序、可靠性和流量控制彼此牵制时，系统如何仍然给上层一个稳定的字节流抽象？

> 把每一个模块先写成可验证的状态机，再将它们拼合。

## 学习路线

1. 用环形缓冲实现容量受限的 `ByteStream`。
2. 将乱序片段放入重组器，只在前缀连续时交付。
3. 让 sender 维护未确认数据与重传计时器。

## 留给自己的问题

拥塞控制为什么不能只依靠接收窗口？下一次重读时，把端到端原则与 ACK 时钟一起梳理。
