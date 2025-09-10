<template>
  <div id="app" class="min-h-screen bg-background">
    <nav class="border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <router-link to="/" class="text-xl font-bold text-primary">
              Vue 3 App
            </router-link>
          </div>
          <div class="flex items-center space-x-4">
            <router-link 
              to="/" 
              class="text-foreground hover:text-primary transition-colors"
            >
              Home
            </router-link>
            <router-link 
              to="/about" 
              class="text-foreground hover:text-primary transition-colors"
            >
              About
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
// App component using Composition API
</script>