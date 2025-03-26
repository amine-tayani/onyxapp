FROM oven/bun:alpine AS deps

WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

from oven/bun:alpine AS build

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bunx --bun prisma generate
COPY migrate-prisma.sh .
RUN chmod +x migrate-prisma.sh

FROM oven/bun:alpine AS deploy

WORKDIR /app

ENV NODE_ENV production

ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/prisma ./prisma

EXPOSE 3000

ENV PORT 3000

CMD ["./migrate-prisma.sh"]
