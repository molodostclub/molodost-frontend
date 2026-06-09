FROM --platform=linux/amd64 node:18-alpine AS base

# Step 1. Rebuild the source code only when needed
FROM base AS builder

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Warning: Lockfile not found. It is recommended to commit lockfiles to version control." && yarn install; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .
COPY scripts ./scripts

ENV NODE_ENV=production

# 🔥 Удаляем кэш Next.js перед сборкой
RUN rm -rf .next/cache

# ← Добавляем сюда ARG/ENV для передачи URL бэкенда
ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}

# Билдим проект (Next.js «впечатает» NEXT_PUBLIC_BASE_URL в бандл)
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else yarn build; \
  fi

# Step 2. Production image
FROM base AS runner

WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Копируем скрипт инициализации кеша
COPY --chown=nextjs:nodejs server-init.js ./

# Явно устанавливаем NODE_ENV=production чтобы предотвратить попытки подключения к dev server
ENV NODE_ENV=production
# Отключаем Turbopack и другие dev-фичи
ENV NEXT_TELEMETRY_DISABLED=1
ENV ENABLE_RUNTIME_MONITORING=false

# Запускаем через server-init.js который очистит кеш перед стартом
CMD ["node", "server-init.js"]
