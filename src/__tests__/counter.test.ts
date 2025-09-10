import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '../stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with counter at 0', () => {
    const store = useCounterStore()
    expect(store.counter).toBe(0)
  })

  it('increments counter', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.counter).toBe(1)
  })

  it('decrements counter', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    store.decrement()
    expect(store.counter).toBe(1)
  })

  it('resets counter', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    store.reset()
    expect(store.counter).toBe(0)
  })
})