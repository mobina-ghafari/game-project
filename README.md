# Game App

یک وب‌اپلیکیشن بازی‌محور ساخته‌شده با Next.js که احراز هویت نمونه و فهرست بازی‌ها را با صفحه‌بندی و فیلتر ارائه می‌کند.

## قابلیت‌ها

- صفحه اصلی با `Navbar` و `Header`
- صفحه ورود با `react-hook-form` و ذخیره توکن در `localStorage`
- لیست بازی‌ها با صفحه‌بندی، انتخاب پیشرفته، و کارت‌های نمایش بازی
- لایه API بر پایه `axios` با interceptor و پیام‌های خطا
- مدیریت داده با `@tanstack/react-query`
- اعلان‌های Toast

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- React Query
- Axios
- Yarn

## پیش‌نیازها

- Node.js
- Yarn

## راه‌اندازی

1. نصب وابستگی‌ها:

```bash
yarn install
```

2. تنظیم متغیرهای محیطی در فایل `.env.local`:

```env
NEXT_PUBLIC_DUMMY_BASE_URL=https://dummyjson.com
NEXT_PUBLIC_RAWG_BASE_URL=https://api.rawg.io/api
NEXT_PUBLIC_RAWG_KEY=YOUR_RAWG_KEY
```

3. اجرای پروژه در حالت توسعه:

```bash
yarn dev
```

سپس اپ را روی آدرس `http://localhost:3000` ببینید.

## اسکریپت‌ها

- `yarn dev` اجرای محیط توسعه
- `yarn build` ساخت نسخه پروداکشن
- `yarn start` اجرای نسخه ساخته‌شده
- `yarn lint` اجرای ESLint

## ساختار پروژه

- `src/app` صفحات Next.js (Home, Login, Products, Users)
- `src/components` کامپوننت‌های UI (Card, Navbar, Pagination, ...)
- `src/services` لایه API و تنظیمات Axios
- `src/providers` Providerهای سراسری (React Query + Toaster)
- `src/router` مسیرها
- `src/types` تایپ‌ها

## نکات API

- احراز هویت نمونه و کاربران از `dummyjson.com` مصرف می‌شود.
- لیست بازی‌ها از RAWG API دریافت می‌شود و کلید آن باید در `NEXT_PUBLIC_RAWG_KEY` قرار بگیرد.
- در صفحه محصولات، پارامترهای `page` و `page_size` برای صفحه‌بندی ارسال می‌شوند.
