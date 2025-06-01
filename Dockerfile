FROM --platform=linux/amd64 node:18-alpine AS base

WORKDIR /app

# Step 1: Build stage
FROM base AS builder

# Копируем манифесты и устанавливаем зависимости
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
  else echo "Warning: Lockfile not found." && yarn install; \
  fi

COPY src ./src
COPY public ./public
COPY next.config.js .
COPY tsconfig.json .

ENV NODE_ENV=production

RUN rm -rf .next/cache
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then pnpm build; \
  else yarn build; \
  fi

# Step 2: Final image
FROM base AS runner

WORKDIR /app

# Безопасный юзер
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Копируем только нужное
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Стартуем standalone сервер
CMD ["node", "server.js"]
