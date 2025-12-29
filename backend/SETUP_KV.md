# Настройка Upstash Redis для постоянного хранения данных

## Шаг 1: Создание Upstash Redis базы данных

1. Зайдите на [vercel.com](https://vercel.com)
2. Откройте ваш проект `d-tide-kg-backend`
3. Перейдите в раздел **Storage** (в боковом меню)
4. Нажмите **Create Database**
5. Выберите **Upstash** → **Upstash for Redis**
6. Введите имя: `d-tide-kg-data` (или любое другое)
7. Выберите регион (ближайший к вам)
8. Нажмите **Create**

## Шаг 2: Подключение Upstash Redis к проекту

После создания Upstash Redis базы:

1. В разделе **Storage** найдите созданную базу данных
2. Нажмите на неё
3. Перейдите во вкладку **Settings** или **.env.local**
4. Найдите раздел **Environment Variables** или кнопку **Add to Project**
5. Нажмите **Add to Project** (или аналогичную кнопку)
6. Выберите проект `d-tide-kg-backend`
7. Подтвердите добавление

Это автоматически добавит переменные окружения:
- `KV_REST_API_URL` (или `UPSTASH_REDIS_REST_URL`)
- `KV_REST_API_TOKEN` (или `UPSTASH_REDIS_REST_TOKEN`)
- `KV_REST_API_READ_ONLY_TOKEN` (опционально)

## Шаг 3: Проверка переменных окружения

1. Перейдите в **Settings** → **Environment Variables** проекта `d-tide-kg-backend`
2. Убедитесь, что видны переменные (могут называться по-разному):
   - `KV_REST_API_URL` или `UPSTASH_REDIS_REST_URL`
   - `KV_REST_API_TOKEN` или `UPSTASH_REDIS_REST_TOKEN`
   - `KV_REST_API_READ_ONLY_TOKEN` (опционально)
3. Они должны быть применены для всех окружений (Production, Preview, Development)

**Важно**: Если переменные называются `UPSTASH_REDIS_REST_URL` и `UPSTASH_REDIS_REST_TOKEN`, нужно будет обновить код (см. ниже)

## Шаг 4: Деплой backend

После настройки KV:

```bash
cd backend
npx vercel --prod
```

## Шаг 5: Миграция данных (опционально)

Если у вас уже есть данные в файле `data/heroSection.json`, они автоматически будут загружены в KV при первом запросе GET.

Или можете сделать это вручную:

```bash
# Установите данные через API
curl -X PUT https://d-tide-kg-backend.vercel.app/api/hero-section \
  -H "Content-Type: application/json" \
  -d @data/heroSection.json
```

## Как это работает

- **С Upstash Redis**: Данные сохраняются в Upstash Redis (постоянное хранилище)
- **Без Upstash**: Используется fallback на файловую систему (`/tmp` или `data/`)
- **Автоматическая миграция**: При первом чтении данные из файла копируются в Redis
- **Поддержка обоих форматов**: Код автоматически определяет, какие переменные окружения используются

## Проверка работы

1. Сделайте изменение через admin панель
2. Проверьте, что данные сохранились:
   ```bash
   curl https://d-tide-kg-backend.vercel.app/api/hero-section
   ```
3. Перезапустите функцию (подождите несколько минут для холодного старта)
4. Проверьте снова - данные должны сохраниться!

## Преимущества

✅ Данные сохраняются постоянно  
✅ Доступны из всех инстансов функций  
✅ Не теряются при перезапуске  
✅ Быстрый доступ (Redis)  
✅ Бесплатно до 10,000 команд в день на Free плане Upstash

## Примечание

Пакет `@vercel/kv` автоматически работает с Upstash Redis через переменные окружения. Код поддерживает оба формата переменных:
- `KV_REST_API_URL` / `KV_REST_API_TOKEN` (старый формат)
- `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` (новый формат Upstash)

