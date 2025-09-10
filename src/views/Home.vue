<template>
  <div class="space-y-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-foreground mb-4">
        Welcome to Vue 3 Frontend App
      </h1>
      <p class="text-xl text-muted-foreground mb-8">
        Built with Vue 3, Composition API, and shadcn/ui components
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Vue 3</CardTitle>
          <CardDescription>
            Latest version of Vue.js with Composition API
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Modern reactive framework with improved performance and TypeScript support.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>shadcn/ui</CardTitle>
          <CardDescription>
            Beautiful and accessible component library
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Copy and paste components built with Radix UI and Tailwind CSS.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>GitHub Actions</CardTitle>
          <CardDescription>
            Automated CI/CD pipeline
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-muted-foreground">
            Automated testing, building, and deployment to GitHub Pages.
          </p>
        </CardContent>
      </Card>
    </div>

    <div class="text-center">
      <Button @click="incrementCounter" class="mr-4">
        Count: {{ counter }}
      </Button>
      <Button variant="outline" @click="resetCounter">
        Reset
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const counterStore = useCounterStore()
const { counter, increment, reset } = counterStore

const incrementCounter = () => {
  increment()
}

const resetCounter = () => {
  reset()
}
</script>