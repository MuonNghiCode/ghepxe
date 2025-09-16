# 🚗 GhepXe - Nền tảng Chia sẻ Chuyến đi

<div align="center">
  <img src="/public/logo.png" alt="GhepXe Logo" width="200"/>
  
  [![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.0-ff69b4)](https://www.framer.com/motion/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
</div>

## 📖 Giới thiệu

**GhepXe** là nền tảng chia sẻ chuyến đi hiện đại, kết nối những người có cùng lộ trình di chuyển. Với giao diện thân thiện và tính năng đa dạng, GhepXe giúp tiết kiệm chi phí, giảm ùn tắc giao thông và bảo vệ môi trường.

### ✨ Tính năng chính

- 🔍 **Tìm kiếm chuyến đi** - Tìm kiếm nhanh chóng theo lộ trình
- 🚙 **Đăng chuyến đi** - Chia sẻ chuyến đi của bạn
- 💬 **Liên hệ trực tiếp** - Kết nối với tài xế/hành khách
- 🌍 **Đa ngôn ngữ** - Hỗ trợ Tiếng Việt và English
- 📱 **Responsive Design** - Tối ưu cho mọi thiết bị
- 🎨 **UI/UX hiện đại** - Giao diện đẹp mắt với animations

## 🛠️ Công nghệ sử dụng

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework với App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library

### Fonts & Typography
- **[Google Fonts](https://fonts.google.com/)**
  - Roboto - Primary font
  - Roboto Serif - Brand font (GhepXe)

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **CSS Variables** - Dynamic theming

## 🚀 Cài đặt và Chạy dự án

### Yêu cầu hệ thống
- Node.js 18.0 hoặc cao hơn
- npm, yarn, pnpm hoặc bun

### 1. Clone repository
```bash
git clone https://github.com/your-username/ghepxe.git
cd ghepxe
```

### 2. Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
# hoặc
bun install
```

### 3. Chạy development server
```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
# hoặc
bun dev
```

### 4. Mở trình duyệt
Truy cập [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 📁 Cấu trúc thư mục

```
ghepxe/
├── src/
│   ├── app/                    # App Router (Next.js 14)
│   │   ├── contact/           # Trang liên hệ
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Homepage
│   ├── components/            # React components
│   │   ├── contact/           # Contact page components
│   │   ├── home/              # Homepage components
│   │   ├── layout/            # Layout components
│   │   └── ui/                # Reusable UI components
│   ├── context/               # React contexts
│   │   └── LanguageContext.tsx
│   └── types/                 # TypeScript types
├── public/                    # Static assets
│   ├── contact/               # Contact page images
│   ├── home/                  # Homepage images
│   └── icons/                 # App icons
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies
```

## 🎨 Design System

### Màu sắc chính
```css
:root {
  --primary-green: #00a982;
  --secondary-green: #00d4aa;
  --gray-text: #64748b;
  --card-bg: #ffffff;
}
```

### Typography
```css
:root {
  --font-roboto: 'Roboto', sans-serif;
  --font-roboto-serif: 'Roboto Serif', serif;
}
```

## 📱 Trang chính

### 🏠 Homepage (`/`)
- Hero section với animations
- Tính năng chính
- Testimonials
- Call-to-action

### 📞 Contact (`/contact`)
- Hero section
- Form liên hệ với validation
- Thông tin liên lạc
- Google Maps integration
- Social media links

## 🌐 Đa ngôn ngữ

Dự án hỗ trợ 2 ngôn ngữ:
- 🇻🇳 **Tiếng Việt** (mặc định)
- 🇺🇸 **English**

Sử dụng Context API để quản lý ngôn ngữ, không cần thư viện bên ngoài.

## 🔧 Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🚀 Deploy

### Vercel (Recommended)
1. Push code lên GitHub
2. Kết nối với [Vercel](https://vercel.com)
3. Deploy tự động

### Các platform khác
- **Netlify**: Hỗ trợ Next.js
- **AWS Amplify**: Deploy với AWS
- **Railway**: Simple deployment

## 📄 License

Dự án này được phân phối dưới [MIT License](LICENSE).

## 👥 Contributing

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📞 Liên hệ

- **Email**: ghepxe@gmail.com
- **Website**: [https://ghepxe-jet.vercel.app](https://ghepxe-jet.vercel.app/)
- **GitHub**: [https://github.com/your-username/ghepxe](https://github.com/your-username/ghepxe)

## 🙏 Acknowledgments

- [Next.js team](https://nextjs.org/) - Awesome React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Beautiful animations
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Vercel](https://vercel.com/) - Deployment platform

---

<div align="center">
  Made with ❤️ by GhepXe Team
</div>
