import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home }
  ]
})

describe('Home', () => {
  it('renders welcome message', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router, createPinia()]
      }
    })
    expect(wrapper.text()).toContain('Welcome to Vue 3 Frontend App')
  })

  it('displays counter button', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router, createPinia()]
      }
    })
    expect(wrapper.text()).toContain('Count: 0')
  })
})