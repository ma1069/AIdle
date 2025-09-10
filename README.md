# Vue 3 Frontend App

A modern Vue 3 frontend application built with Composition API, TypeScript, and shadcn/ui components. Features automated CI/CD pipeline with GitHub Actions for testing, building, and deploying to GitHub Pages.

## 🚀 Features

- **Vue 3** with Composition API and TypeScript
- **shadcn/ui** components with Tailwind CSS
- **Pinia** for state management
- **Vue Router** for navigation
- **Vitest** for testing with coverage
- **ESLint** for code quality
- **GitHub Actions** for automated CI/CD
- **GitHub Pages** for static hosting

## 🛠️ Tech Stack

### Frontend
- Vue 3.4+ with Composition API
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for components
- Vue Router for routing
- Pinia for state management
- Lucide Vue for icons

### Development
- Vite for build tooling and HMR
- Vitest for testing
- ESLint for linting
- GitHub Actions for CI/CD
- GitHub Pages for hosting

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Lint code
npm run lint

# Type check
npm run type-check
```

## 🧪 Testing

The project includes a comprehensive test suite using Vitest:

```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

Tests cover:
- Component rendering
- Store functionality
- User interactions
- Route navigation

## 🚀 Deployment

### GitHub Pages (Current Setup)

The app is automatically deployed to GitHub Pages on every push to the `main` branch:

1. **CI Pipeline**: Runs tests, linting, and type checking
2. **Build Pipeline**: Creates production build
3. **Deploy Pipeline**: Deploys to GitHub Pages

**Pros:**
- ✅ Free hosting
- ✅ Simple setup
- ✅ Automatic SSL
- ✅ Custom domains supported
- ✅ Perfect for static sites

**Cons:**
- ❌ No server-side rendering
- ❌ Limited to static files
- ❌ No environment variables
- ❌ No database connections

### Vercel Alternative

For comparison, here's how Vercel would work:

**Setup:**
1. Connect GitHub repository to Vercel
2. Automatic deployments on every push
3. Preview deployments for PRs

**Pros:**
- ✅ Excellent performance with global CDN
- ✅ Automatic HTTPS and custom domains
- ✅ Environment variables support
- ✅ Serverless functions if needed
- ✅ Preview deployments for PRs
- ✅ Better analytics and monitoring
- ✅ Edge functions for dynamic content

**Cons:**
- ❌ Free tier has limitations
- ❌ More complex than GitHub Pages
- ❌ Vendor lock-in

**Recommendation:** For your requirements (simple pipeline, no staging, direct production deployment), **GitHub Pages is perfect**. Vercel would be better if you need serverless functions, environment variables, or more advanced features.

## 💾 Database Suggestions for State Persistence

For adding persistent state to your Vue 3 app, here are some excellent free options:

### 1. **Supabase** (Recommended)
- **Free tier**: 500MB database, 50MB file storage, 2GB bandwidth
- **Features**: PostgreSQL database, real-time subscriptions, authentication, file storage
- **Setup**: Very easy with Vue 3
- **Best for**: Full-featured apps with user authentication

```bash
npm install @supabase/supabase-js
```

### 2. **Firebase Firestore**
- **Free tier**: 1GB storage, 50K reads, 20K writes per day
- **Features**: NoSQL database, real-time updates, authentication
- **Setup**: Google Cloud integration
- **Best for**: Real-time apps, mobile-first applications

```bash
npm install firebase
```

### 3. **PlanetScale**
- **Free tier**: 1 database, 1GB storage, 1 billion reads/month
- **Features**: MySQL-compatible, branching, serverless
- **Setup**: MySQL with modern tooling
- **Best for**: Traditional relational data

### 4. **Railway**
- **Free tier**: $5 credit monthly (covers small databases)
- **Features**: PostgreSQL, Redis, MongoDB
- **Setup**: Simple deployment
- **Best for**: Full-stack applications

### 5. **Neon**
- **Free tier**: 3GB storage, 10GB transfer
- **Features**: Serverless PostgreSQL, branching
- **Setup**: Modern PostgreSQL with branching
- **Best for**: PostgreSQL with modern features

### 6. **MongoDB Atlas**
- **Free tier**: 512MB storage
- **Features**: NoSQL, global clusters
- **Setup**: Cloud MongoDB
- **Best for**: Document-based data

## 🔧 Development

### Project Structure

```
src/
├── components/          # Reusable components
│   └── ui/             # shadcn/ui components
├── views/              # Page components
├── stores/             # Pinia stores
├── router/             # Vue Router configuration
├── lib/                # Utility functions
├── assets/             # Static assets
└── __tests__/          # Test files
```

### Adding New Components

1. Create component in `src/components/`
2. Add tests in `src/__tests__/`
3. Import and use in views

### State Management

Use Pinia stores for global state:

```typescript
// src/stores/example.ts
import { defineStore } from 'pinia'

export const useExampleStore = defineStore('example', () => {
  const data = ref(null)
  
  const fetchData = async () => {
    // API call
  }
  
  return { data, fetchData }
})
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run test:ui` - Run tests with UI
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Lint code
- `npm run type-check` - Type check

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Vue 3, TypeScript, and modern web technologies.