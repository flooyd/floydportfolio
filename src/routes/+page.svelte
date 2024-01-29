<main>
	<div class="name">
		Floyd Jones
		<div>
			<a href="https://linkedin.com/in/flooyd">Linkedin</a>
			<a href="https://github.com/flooyd">GitHub</a>
		</div>
	</div>
	<div class="title">Full Stack Developer</div>
	<div class="intro">
		Hello! I am a web developer with 5 years of experience. I have worked on a
		variety of projects ranging from small business websites to large scale web applications. My
		hobby projects include some game development. I am looking for a job
		using, in this order, Svelte, React, or Solid. Please check out my projects below and feel free
		to contact me!
	</div>
    <div class="projects">
        <div class="title">Projects</div>
        <div class="project">
            <a href="https://github.com/flooyd/things">App Editor - SvelteKit</a>
            <img src="https://github.com/flooyd/things/raw/main/public/images/grid.png?raw=true" alt="screenshot of game">
        </div>
        <div class="project">
            <a href="https://github.com/flooyd/solidtd">Tower Defense Map Editor - Solid</a>
            <img src="https://i.imgur.com/VKl73zK.png" alt="screenshot of game">
        <div class="project">
            <a href="https://github.com/flooyd/dota2lfg">Dota 2 LFG - React</a>
            <img src="https://github.com/flooyd/dota2lfg/raw/master/readme%20images/dota2lfg.PNG" alt="screenshot of game">
        </div>
    </div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		padding: 19.2px;
		box-sizing: border-box;
		font-family: 'Open Sans', sans-serif;
	}

	.name {
		font-size: 33.18px;
		font-weight: bold;
		font-family: 'Roboto Slab', serif;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.name span {
		font-size: 19.2px;
		font-weight: normal;
		font-family: 'Roboto', sans-serif;
		margin-left: 19.2px;
        padding-bottom: 11.11px;
        border-bottom: 3px solid green;
	}

	.title {
		font-size: 23.04px;
		margin-top: 11.11px;
		width: fit-content;
		font-style: italic;
	}

	.intro {
		margin-top: 19.2px;
		font-size: 16px;
		padding-bottom: 11.11px;
        max-width: 800px;
		border-bottom: 3px solid green;
	}

    .project {
        margin-top: 13.33px;
        display: flex;
        flex-direction: column;
        gap: 13.33px;
    }

    a {
        font-size: 19.2px;
        font-weight: bold;
        color: green;
        text-decoration: none;
    }

    img {
        max-width: 800px;
    }
</style>
