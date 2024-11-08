import type { Config } from 'tailwindcss';

export default {
    content: ['./lib/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                text_main: '#063248',
                bg_main: '#FFFFFF',
                bg_primary: '#C4E3F1',
                bg_secondary: '#E3F1F4',
                button_active: '#C4E3F1',
                button_disabled: '#F7FBFF',
                button_default: '#E3F1F4',
                button_primary: '#70BFD1',
                border_hover: '#70BFD2',
            },
        },
    },
    plugins: [],
} satisfies Config;
