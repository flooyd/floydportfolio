<div class="tile mini motion">
	<span class="label">Motion study</span>
	<div class="motion__stage" aria-hidden="true">
		<span class="motion__bar"></span>
		<span class="motion__bar"></span>
		<span class="motion__bar motion__bar--hero"></span>
	</div>
	<span class="mini__note">A value changes, its row re‑ranks</span>
</div>

<style>
	.motion__stage {
		position: relative;
		height: 82px;
	}
	.motion__bar {
		position: absolute;
		left: 0;
		height: 22px;
		border-radius: var(--radius-chip);
		background: var(--line-strong);
		animation: rerank-others 5s var(--ease-out) infinite;
	}
	.motion__bar:nth-child(1) {
		top: 0;
		width: 78%;
	}
	.motion__bar:nth-child(2) {
		top: 30px;
		width: 62%;
	}
	.motion__bar--hero {
		top: 60px;
		width: 92%;
		background: var(--accent-fill);
		transform-origin: left center;
		animation-name: rerank-hero;
	}
</style>
