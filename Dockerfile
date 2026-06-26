FROM node:20-alpine AS base

# sharp (native) на Alpine: без libc6-compat падает в медленный squoosh-wasm
RUN apk add --no-cache libc6-compat

FROM base AS builder

WORKDIR /app

RUN apk add --no-cache vips-dev

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

RUN apk add --no-cache vips

# nginx proxy_cache для /_next/image (рекомендация для prod):
#   proxy_cache_path /var/cache/nginx/images levels=1:2 keys_zone=img_cache:50m max_size=500m inactive=30d;
#   location /_next/image {
#     proxy_cache img_cache;
#     proxy_cache_valid 200 30d;
#     proxy_cache_use_stale error timeout updating;
#     proxy_pass http://molodost_frontend:3000;
#   }

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --chown=nextjs:nodejs server-init.js ./

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV ENABLE_RUNTIME_MONITORING=false

CMD ["node", "server-init.js"]
