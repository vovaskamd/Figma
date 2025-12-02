#!/bin/bash

# Скрипт деплоя для Hostinger
# Автоматически запускается при Git Deployment

echo "🚀 Начинаем деплой Argaman..."

# Установка зависимостей
echo "📦 Установка зависимостей..."
npm install --production=false

# Сборка проекта
echo "🔨 Сборка проекта..."
npm run build

# Копирование файлов в public_html
echo "📁 Копирование файлов..."
rm -rf public_html/*
cp -r dist/* public_html/

# Создание .htaccess для React Router
echo "⚙️ Настройка .htaccess..."
cat > public_html/.htaccess << 'EOF'
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>

# Кэширование для производительности
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
</IfModule>

# Gzip сжатие
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/x-javascript application/json
</IfModule>

# Безопасность
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
EOF

echo "✅ Деплой завершен успешно!"
echo "🌐 Сайт доступен по адресу вашего домена"
