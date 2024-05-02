# MUI c нуля

(видео)[https://www.youtube.com/watch?v=OZ_FUaV_xbg] 8:14

## Предварительные действия

После разворачивания шаблона Vite react-ts
Повторяем описанное на сайте MUI в разделе инсталляция

```bash
# установка пакета MUI и стилизации на базе emotion
pnpm add @mui/material @emotion/react @emotion/styled
# установка стандартных иконок MUI
pnpm add @mui/icons-material
```

Использована установка шрифтов из из CDN, но лучше разобоаться с локальной установкой в виде пакета со шрифтом Roboto

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
/>
```

## Добавил типизацию в проект
