import { defineConfig } from 'vite';
import {readdirSync} from 'node:fs';
export default defineConfig({base:'./',define:{__ACADEMY_ASSETS__:JSON.stringify(readdirSync(new URL('./public/assets/academy/',import.meta.url)).filter(name=>name.endsWith('.png')))}});
