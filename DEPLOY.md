# Инструкция по деплою на Vercel

## Структура проекта

Проект состоит из трех частей:
- **backend** - API сервер (Vercel Serverless Functions)
- **portal** - Публичный веб-сайт (Vercel Static Site)
- **admin** - Админ-панель (Vercel Static Site)

## Шаг 1: Деплой Backend

1. Перейдите в папку `backend`:
   ```bash
   cd backend
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. **Войдите в Vercel** (если еще не вошли):
   ```bash
   npx vercel login
   ```
   Выберите способ входа:
   - Continue with GitHub (рекомендуется, если используете GitHub)
   - Continue with Email (если у вас есть аккаунт Vercel)
   - Другой доступный способ
   
   Следуйте инструкциям в браузере для завершения входа.

4. Подключите проект к Vercel:
   ```bash
   npx vercel
   ```
   Следуйте инструкциям:
   - Выберите "Set up and deploy" → `yes`
   - Выберите scope (ваш аккаунт)
   - На вопрос "Link to existing project?" выберите **`No`** (создать новый проект)
   - Введите имя проекта (например: `d-tide-kg-backend`)
   - Подтвердите настройки
   
   **Примечание**: Если хотите посмотреть список существующих проектов, используйте:
   ```bash
   npx vercel projects ls
   ```

5. Деплой в production:
   ```bash
   npx vercel --prod
   ```

6. **Важно**: Запишите URL вашего backend (он будет показан после деплоя, например: `https://your-backend.vercel.app`)

## Шаг 2: Деплой Portal

1. Перейдите в папку `portal`:
   ```bash
   cd portal
   ```

2. Создайте файл `.env.production` (или настройте в Vercel Dashboard):
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```
   Замените `your-backend-url.vercel.app` на реальный URL вашего backend

3. Подключите проект к Vercel:
   ```bash
   npx vercel
   ```

4. В Vercel Dashboard добавьте переменную окружения:
   - Перейдите в Settings → Environment Variables
   - Добавьте: `VITE_API_URL` = `https://your-backend-url.vercel.app`
   - Примените для Production, Preview, Development

5. Деплой:
   ```bash
   npx vercel --prod
   ```

## Шаг 3: Деплой Admin

1. Перейдите в папку `admin`:
   ```bash
   cd admin
   ```

2. Создайте файл `.env.production` (или настройте в Vercel Dashboard):
   ```
   VITE_API_URL=https://your-backend-url.vercel.app
   ```
   Замените `your-backend-url.vercel.app` на реальный URL вашего backend

3. Подключите проект к Vercel:
   ```bash
   npx vercel
   ```

4. В Vercel Dashboard добавьте переменную окружения:
   - Перейдите в Settings → Environment Variables
   - Добавьте: `VITE_API_URL` = `https://your-backend-url.vercel.app`
   - Примените для Production, Preview, Development

5. Деплой:
   ```bash
   npx vercel --prod
   ```

## Альтернативный способ: Деплой через Vercel Dashboard

1. Зайдите на [vercel.com](https://vercel.com)
2. Импортируйте репозиторий (если используете Git)
3. Для каждого проекта (backend, portal, admin):
   - Выберите корневую папку проекта
   - Настройте Build Command и Output Directory:
     - **backend**: Build Command - оставить пустым (Vercel автоматически определит), Output Directory - оставить пустым, Root Directory - `backend`
     - **portal**: Build Command - `npm run build`, Output Directory - `dist`, Root Directory - `portal`
     - **admin**: Build Command - `npm run build`, Output Directory - `dist`, Root Directory - `admin`
   - Добавьте переменные окружения (для portal и admin)
   - Деплойте

## Важные замечания

### ⚠️ КРИТИЧЕСКИ ВАЖНО: Хранение данных

**Проблема**: Vercel Serverless Functions имеют read-only файловую систему. Единственное место для записи - `/tmp`, но данные там удаляются при каждом перезапуске функции.

**Текущая реализация**: 
- Backend использует `/tmp/data` для хранения JSON файлов
- При первом чтении данные копируются из папки `data/` (из репозитория) в `/tmp/data`
- Это означает, что:
  - Начальные данные берутся из папки `data/` в репозитории
  - Изменения сохраняются в `/tmp/data` (временно)
  - Данные будут теряться при каждом перезапуске функции
  - Это **НЕ подходит для production с частыми изменениями**

**Важно**: Убедитесь, что файлы из папки `backend/data/` включены в репозиторий (не в .gitignore), чтобы начальные данные были доступны.

**Решения для production**:

1. **Vercel KV (рекомендуется)** - Redis-подобное хранилище:
   ```bash
   # Установите Vercel KV через Dashboard или CLI
   vercel kv create
   ```

2. **Vercel Postgres** - PostgreSQL база данных:
   ```bash
   vercel postgres create
   ```

3. **Внешний сервис** - MongoDB Atlas, Supabase, Firebase и т.д.

4. **GitHub как хранилище** - коммитить изменения в репозиторий (не рекомендуется для частых изменений)

**Для тестирования**: Текущая реализация с `/tmp` подойдет только для демонстрации и тестирования.

### Backend (Serverless Functions)

- Backend использует Vercel Serverless Functions
- Каждый endpoint - отдельная serverless функция в папке `api/`
- Функции автоматически определяются по структуре файлов

### CORS

Backend настроен для работы с любыми источниками. В production рекомендуется ограничить CORS для безопасности.

### Переменные окружения

Убедитесь, что переменная `VITE_API_URL` установлена для portal и admin перед деплоем, иначе они будут использовать `http://localhost:3001`.

## Проверка работы

1. Проверьте backend: `https://your-backend-url.vercel.app/api`
2. Проверьте health: `https://your-backend-url.vercel.app/health`
3. Проверьте portal: откройте в браузере и проверьте, что данные загружаются
4. Проверьте admin: откройте в браузере и попробуйте изменить данные

## Локальная разработка

Для локальной разработки используйте:

```bash
# Backend
cd backend
npm run local
# или напрямую: npx vercel dev

# Portal (в другом терминале)
cd portal
npm run dev

# Admin (в другом терминале)
cd admin
npm run dev
```

**Важно**: 
- Для backend используйте `npm run local` или `npx vercel dev` (не `npm run dev`, чтобы избежать рекурсии)
- Убедитесь, что в `portal` и `admin` установлена переменная `VITE_API_URL=http://localhost:3000` в файле `.env.local` (Vercel dev обычно запускается на порту 3000)

