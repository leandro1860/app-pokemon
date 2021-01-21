//postcss.config.js
import tailwindcss from 'tailwindcss';
// eslint-disable-next-line no-undef
export const plugins = [tailwindcss('./tailwind.js'), require('autoprefixer')];
