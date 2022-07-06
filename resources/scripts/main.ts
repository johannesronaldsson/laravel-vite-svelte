// @ts-ignore
import { createInertiaApp } from '@inertiajs/inertia-svelte';
import { importPageComponent } from '@/scripts/vite/import-page-component';
import { InertiaProgress } from '@inertiajs/progress';

import '../css/app.css';

InertiaProgress.init();

createInertiaApp({
	// @ts-ignore
	resolve: (name) => importPageComponent(name, import.meta.glob('../views/pages/**/*.svelte')),

	// @ts-ignore
	setup({ el, App, props }) {
		new App({ target: el, props })
	},
})
