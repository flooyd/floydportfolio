<script>
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Work from '$lib/components/Work.svelte';
	import Approach from '$lib/components/Approach.svelte';
	import About from '$lib/components/About.svelte';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Floyd Jones — Front-end engineer</title>
	<meta
		name="description"
		content="Front-end engineer in Austin building dashboards, editors and internal tools in React and Svelte, with Claude in the loop."
	/>
</svelte:head>

<a class="skip" href="#work">Skip to work</a>
<div class="page">
	<SiteHeader />

	<main>
		<Hero />
		<Work />
		<Approach />
		<About />
	</main>

	<Contact />
</div>
