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
            <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/15240768/295236635-4c7bcd18-557f-4bb6-9877-58a97adc79d9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240126T053454Z&X-Amz-Expires=300&X-Amz-Signature=bb6c5c809a59a39f3f87a835f0c94da927007f57de492828789e30d136ddf26c&X-Amz-SignedHeaders=host&actor_id=15240768&key_id=0&repo_id=740021734" alt="screenshot of game">
        </div>
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
