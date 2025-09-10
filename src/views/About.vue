<template>
  <div class="max-w-3xl mx-auto space-y-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-foreground mb-4">
        About This Project
      </h1>
      <p class="text-xl text-muted-foreground">
        A modern Vue 3 frontend application with automated deployment
      </p>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Tech Stack</CardTitle>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="space-y-2">
            <h3 class="font-semibold">Frontend</h3>
            <ul class="text-sm text-muted-foreground space-y-1">
              <li>• Vue 3 with Composition API</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• shadcn/ui components</li>
              <li>• Vue Router</li>
              <li>• Pinia for state management</li>
            </ul>
          </div>
          <div class="space-y-2">
            <h3 class="font-semibold">Development</h3>
            <ul class="text-sm text-muted-foreground space-y-1">
              <li>• Vite for build tooling</li>
              <li>• Vitest for testing</li>
              <li>• ESLint for code quality</li>
              <li>• GitHub Actions for CI/CD</li>
              <li>• GitHub Pages for hosting</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Features</CardTitle>
      </CardHeader>
      <CardContent>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li>• 🚀 Automated deployment on every PR merge</li>
          <li>• 🧪 Comprehensive test suite with coverage</li>
          <li>• 📱 Mobile-first responsive design</li>
          <li>• 🎨 Modern UI with dark mode support</li>
          <li>• ⚡ Fast development with Vite HMR</li>
          <li>• 🔧 TypeScript for type safety</li>
        </ul>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/ui/card.vue'
import CardContent from '@/components/ui/card-content.vue'
import CardHeader from '@/components/ui/card-header.vue'
import CardTitle from '@/components/ui/card-title.vue'
</script>