import { defineConfig, presetAttributify, presetIcons, presetUno } from "unocss";
import {presetDaisy} from 'unocss-preset-daisy'

export default defineConfig({
    theme: {
        // ...
        colors: {
            // class="text-very-cool"
            'veryCool': '#0000ff',
            'brand': {
                //class="bg-brand-primary"
                'primary': 'hsla(var(--hue, 217), 78%, 51%)',
                'success': '#67c23a',
                'warning': '#e6a23c',
                'danger': '#f56c6c',
                'error': '#f56c6c',
                'info': '#909399'
            }
        },
    },
    shortcuts: {
        // general
        'n-bg-base': 'bg-white dark:bg-[#151515]',
        'n-bg-active': 'bg-gray:5',
        'n-bg-hover': 'bg-gray:3',
        'n-border-base': 'border-gray/20',
        // shortcuts to multiple utilities
        'btn-base': 'py-2 px-4 font-semibold rounded-lg shadow-md',
        'btn-green': 'text-white bg-green-500 hover:bg-green-700',
        // single utility alias
        'red': 'text-red-100',
        // glass
        'n-glass-effect': 'backdrop-blur-6 bg-white/80 dark:bg-[#151515]/90',
        'n-navbar-glass': 'sticky z-10 top-0 n-glass-effect',
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({}),
        presetDaisy()
    ]
})
