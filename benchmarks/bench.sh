#!/usr/bin/env bash

set -e  # stop on error

echo "=============================="
echo " Running Router Comparison Benchmark"
echo "=============================="
bun run routers/bench.ts
echo ""

echo "=============================="
echo " All benchmarks finished"
echo "=============================="
