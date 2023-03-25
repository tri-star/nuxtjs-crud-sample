import { useState } from 'nuxt/app'

export const useValue = () => useState('value', () => 0)
