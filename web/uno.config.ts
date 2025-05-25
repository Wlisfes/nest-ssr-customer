import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetTagify from '@unocss/preset-tagify'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
    presets: [presetUno(), presetAttributify(), presetTagify(), presetRemToPx({ baseFontSize: 4 })],
    theme: {
        breakpoints: { xs: '480px', sm: '640px', md: '768px', lg: '1280px' }
    },
    rules: [],
    shortcuts: [{ 'max-w-large': 'w-full max-w-1280 m-inline-auto p-inline-24' }]
})
