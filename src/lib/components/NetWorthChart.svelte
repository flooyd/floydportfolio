<script>
	// Sample data, shaped like the finTrack screenshot. Swap for real data if wanted.
	const months = [
		"Jun '25",
		"Jul '25",
		"Aug '25",
		"Sep '25",
		"Oct '25",
		"Nov '25",
		"Dec '25",
		"Jan '26",
		"Feb '26",
		"Mar '26",
		"Apr '26",
		"May '26"
	];
	const vals = [30400, 31650, 32120, 33900, 35780, 37240, 38610, 39940, 41830, 43900, 46970, 48210];
	const n = vals.length;

	// Plot space is a 480 x 160 viewBox stretched to the container; y runs $28k..$50k.
	const W = 480;
	const H = 160;
	const LO = 28000;
	const HI = 50000;
	const pts = vals.map((v, i) => [(i / (n - 1)) * W, H - ((v - LO) / (HI - LO)) * H]);

	/** @param {number} x */
	const r1 = (x) => x.toFixed(1);

	// Catmull-Rom spline converted to cubic Beziers (tension 1/6) for a smooth line
	// through every point. Computed here so the path is in the server-rendered HTML.
	let line = `M${r1(pts[0][0])} ${r1(pts[0][1])}`;
	for (let i = 0; i < n - 1; i++) {
		const p0 = pts[Math.max(0, i - 1)];
		const p1 = pts[i];
		const p2 = pts[i + 1];
		const p3 = pts[Math.min(n - 1, i + 2)];
		line +=
			` C${r1(p1[0] + (p2[0] - p0[0]) / 6)} ${r1(p1[1] + (p2[1] - p0[1]) / 6)}` +
			` ${r1(p2[0] - (p3[0] - p1[0]) / 6)} ${r1(p2[1] - (p3[1] - p1[1]) / 6)}` +
			` ${r1(p2[0])} ${r1(p2[1])}`;
	}
	const area = `${line} L${W} ${H} L0 ${H} Z`;

	/** @param {number} v */
	const money = (v) => '$' + Math.abs(v).toLocaleString('en-US');

	// Footer line: the change across the whole range, e.g. "Up $17,810 since Jun '25".
	const total = vals[n - 1] - vals[0];
	const summary = `${total >= 0 ? 'Up' : 'Down'} ${money(total)} since ${months[0]}`;

	// The whole component's state: the selected month. Defaults to the latest.
	let idx = n - 1;

	/** @type {HTMLDivElement} */
	let plot;

	$: diff = idx > 0 ? vals[idx] - vals[idx - 1] : 0;
	$: delta = idx > 0 ? `${diff >= 0 ? '+' : '−'}${money(diff)} this month` : 'starting point';
	$: left = `${((idx / (n - 1)) * 100).toFixed(2)}%`;
	$: top = `${((pts[idx][1] / H) * 100).toFixed(2)}%`;

	/** @param {PointerEvent} e */
	function scrub(e) {
		const r = plot.getBoundingClientRect();
		if (!r.width) return;
		const t = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
		idx = Math.round(t * (n - 1));
	}
</script>

<!-- Live chart: a real, interactive component. Sample data. -->
<div class="tile chart">
	<div class="chart__head">
		<span class="chart__live"
			><span class="dot dot--sm" aria-hidden="true"></span><span
				><strong>LIVE</strong> · net-worth chart from finTrack</span
			></span
		>
		<span>drag to scrub</span>
	</div>
	<div class="chart__readout" aria-live="polite">
		<span class="chart__value">{money(vals[idx])}</span>
		<span class="chip chart__delta">{delta}</span>
		<span class="chart__month"><span>{months[idx]}</span> · sample data</span>
	</div>
	<!-- Pointer scrubbing is a shortcut; the range input below is the keyboard and assistive-tech path. -->
	<div class="chart__plot" bind:this={plot} on:pointermove={scrub} on:pointerdown={scrub}>
		<span class="chart__grid" style="top: 0" aria-hidden="true"></span>
		<span class="chart__grid" style="top: 45.5%" aria-hidden="true"></span>
		<span class="chart__grid" style="top: 90.9%" aria-hidden="true"></span>
		<span class="chart__ylabel" style="top: 0.1875rem" aria-hidden="true">$50k</span>
		<span class="chart__ylabel" style="top: calc(45.5% + 0.1875rem)" aria-hidden="true">$40k</span>
		<svg
			class="chart__svg"
			viewBox="0 0 {W} {H}"
			preserveAspectRatio="none"
			role="img"
			aria-label="Net worth rising from about $30,000 in June 2025 to about $48,000 in May 2026"
		>
			<path class="chart__area" d={area}></path>
			<path class="chart__line" d={line}></path>
		</svg>
		<span class="chart__guide" style="left: {left}" aria-hidden="true"></span>
		<span class="chart__marker" style="left: {left}; top: {top}" aria-hidden="true"></span>
	</div>
	<div class="chart__xaxis" aria-hidden="true">
		<span>Jun '25</span><span>Sep '25</span><span>Dec '25</span><span>Mar '26</span><span
			>May '26</span
		>
	</div>
	<div class="chart__foot">
		<span>{summary}</span>
		<input
			class="chart__range"
			type="range"
			min="0"
			max={n - 1}
			step="1"
			bind:value={idx}
			aria-label="Month"
		/>
	</div>
</div>

<style>
	.chart {
		flex: 1 1 auto;
		padding: 1.375rem 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.chart__head {
		display: flex;
		justify-content: space-between;
		gap: 0.75rem;
		flex-wrap: wrap;
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		color: var(--muted);
	}
	.chart__live {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}
	.chart__live strong {
		color: var(--accent);
		font-weight: 600;
	}
	.chart__readout {
		display: flex;
		align-items: baseline;
		gap: 0.75rem;
		flex-wrap: wrap;
	}
	.chart__value {
		font-weight: 800;
		font-size: 2.5rem;
		line-height: 1;
		letter-spacing: -0.03em;
		font-variant-numeric: tabular-nums;
	}
	.chart__delta {
		font-variant-numeric: tabular-nums;
	}
	.chart__month {
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		color: var(--muted);
	}
	.chart__plot {
		position: relative;
		flex: 1 1 auto;
		min-height: 9.375rem;
		cursor: ew-resize;
		touch-action: pan-y;
	}
	.chart__grid {
		position: absolute;
		left: 0;
		right: 0;
		border-top: 1px dashed var(--line);
	}
	.chart__ylabel {
		position: absolute;
		left: 0;
		font-family: var(--font-mono);
		font-size: 0.625rem;
		color: var(--muted);
	}
	.chart__svg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		overflow: visible;
		animation: reveal 1.3s var(--ease-out) both;
	}
	.chart__area {
		fill: var(--accent);
		opacity: 0.1;
	}
	.chart__line {
		fill: none;
		stroke: var(--accent);
		stroke-width: 0.15625rem;
		stroke-linecap: round;
		stroke-linejoin: round;
		vector-effect: non-scaling-stroke;
	}
	.chart__guide {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1px;
		background: var(--line-strong);
		pointer-events: none;
		transition: left 0.15s ease-out;
	}
	.chart__marker {
		position: absolute;
		width: 0.875rem;
		height: 0.875rem;
		margin: -0.4375rem 0 0 -0.4375rem;
		border-radius: 50%;
		background: var(--accent);
		border: 0.1875rem solid var(--tile);
		pointer-events: none;
		transition:
			left 0.15s ease-out,
			top 0.15s ease-out;
	}
	.chart__xaxis {
		display: flex;
		justify-content: space-between;
		font-family: var(--font-mono);
		font-size: 0.625rem;
		color: var(--muted);
	}
	.chart__foot {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		flex-wrap: wrap;
		font-family: var(--font-mono);
		font-size: 0.6875rem;
		color: var(--muted);
	}
	.chart__range {
		flex: 0 1 9.375rem;
		min-width: 0;
		height: 1.5rem;
		margin: 0;
		accent-color: var(--accent);
		cursor: ew-resize;
	}

	@media (max-width: 640px) {
		.chart__range {
			flex: 1 1 100%;
		}
	}
</style>
