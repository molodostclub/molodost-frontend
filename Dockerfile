FROM node:20-alpine AS base

FROM base AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY scripts ./scripts

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

FROM base AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --chown=nextjs:nodejs server-init.js ./

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV ENABLE_RUNTIME_MONITORING=false

CMD ["node", "server-init.js"]
