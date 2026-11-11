<script>
	import '@fontsource-variable/bricolage-grotesque/opsz.css';
	import '@fontsource-variable/martian-mono';
	import '$lib/styles/tokens.css';
	import '$lib/styles/global.css';
	import { onMount } from 'svelte';

	// Define the motion elements once hydration is done (see $lib/motion.js). If the chunk fails
	// to load, drop the .js class so the content they were going to animate in shows anyway.
	onMount(() => {
		import('$lib/motion.js').catch(() => document.documentElement.classList.remove('js'));
	});
</script>

<slot />
