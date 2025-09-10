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
      <Button @click="increment" class="mr-4">
        Count: {{ count }}
      </Button>
      <Button variant="outline" @click="reset">
        Reset
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from '@/components/ui/card.vue'
import CardContent from '@/components/ui/card-content.vue'
import CardDescription from '@/components/ui/card-description.vue'
import CardHeader from '@/components/ui/card-header.vue'
import CardTitle from '@/components/ui/card-title.vue'
import Button from '@/components/ui/button.vue'

// Simple counter state using Composition API
const count = ref(0)

// Simple functions
const increment = () => {
  count.value++
}

const reset = () => {
  count.value = 0
}
</script>