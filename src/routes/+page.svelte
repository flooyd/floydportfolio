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
            <img src="https://private-user-images.githubusercontent.com/15240768/295236635-4c7bcd18-557f-4bb6-9877-58a97adc79d9.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDYyNDYyNzEsIm5iZiI6MTcwNjI0NTk3MSwicGF0aCI6Ii8xNTI0MDc2OC8yOTUyMzY2MzUtNGM3YmNkMTgtNTU3Zi00YmI2LTk4NzctNThhOTdhZGM3OWQ5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAxMjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMTI2VDA1MTI1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVjZDYwZDMyN2EzZjhkMTlkODk1NTJmZDM5YmM3NGYyNDI5Y2FhOGM5NzkzMjAxNDAwZTdlYTgxOWU2NWZjMzImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.r1SijEb3NuO1VMzR5P7fADGHU3Dcc8YzQ9yAALB8Sx8" alt="screenshot of game">
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
