#!/usr/bin/env bash

set -e  # stop on error

echo "=============================="
echo " Running Router Comparison Benchmark"
echo "=============================="
bun run routers/bench.ts
echo ""

echo "=============================="
echo " Running Peepal Search vs Find Benchmark"
echo "=============================="
bun run routers/peepal-bench.ts
echo ""

echo "=============================="
echo " All benchmarks finished"
echo "=============================="
