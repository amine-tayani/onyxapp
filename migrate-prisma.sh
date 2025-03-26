#!/bin/bash

bunx --bun prisma generate

bunx --bun prisma db push

bun run dev