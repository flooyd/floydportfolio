// Project content for the Workbench portfolio.
// Copy is final; keep it verbatim.
// Images live in static/work/. imageWidth/imageHeight are the file's pixel size.

/** Filter buttons, in display order. `id` matches the values in `categories`. */
export const filters = [
	{ id: 'all', label: 'All' },
	{ id: 'dashboards', label: 'Dashboards' },
	{ id: 'editors', label: 'Editors' },
	{ id: 'realtime', label: 'Real-time' },
	{ id: 'games', label: 'Games' }
];

/** The five selected projects, in display order. The first is the wide featured card. */
export const projects = [
	{
		id: 'book-builder',
		title: 'Book Builder',
		label: 'Editor · Featured',
		featured: true,
		categories: ['editors'],
		description:
			'A writing workshop for novelists. The editor is typeset like the finished page, and every character, place and magic system opens in a card when you type @.',
		tags: ['SvelteKit', 'Tiptap', 'Postgres'],
		href: 'https://book-builder-nine.vercel.app',
		image: '/work/bookbuilder.webp',
		imageWidth: 1390,
		imageHeight: 1018,
		imageAlt:
			'Book Builder editor: a chapter typeset like a printed page, with a character card open over the text',
		imagePosition: 'center 31%'
	},
	{
		id: 'fintrack',
		title: 'finTrack',
		label: 'Dashboard',
		categories: ['dashboards'],
		description:
			'One key logs income, another logs an expense, and the net-worth chart redraws while you type.',
		tags: ['SvelteKit', 'live charts'],
		href: 'https://project-r11eo.vercel.app',
		image: '/work/fintrack.webp',
		imageWidth: 1200,
		imageHeight: 879,
		imageAlt: 'finTrack net-worth chart with income and expense entries logged by keystroke',
		imagePosition: 'center'
	},
	{
		id: 'mango',
		title: 'Mango',
		label: 'Data viz · Games',
		categories: ['dashboards', 'games'],
		description:
			'Replay analysis for Dota 2. Find the moments that decided a long match without scrubbing for them.',
		tags: ['React', 'data visualization'],
		href: 'https://github.com/flooyd/mango',
		image: '/work/mango.webp',
		imageWidth: 2879,
		imageHeight: 1799,
		imageAlt: 'Mango replay list: match cards with scores, net-worth bars and hero line-ups',
		imagePosition: 'left top'
	},
	{
		id: 'language-learn',
		title: 'Language Learn',
		label: 'Learning',
		categories: ['games'],
		description:
			'Flashcards and quizzes that turn daily practice into a game. Optimistic updates keep every answer instant.',
		tags: ['SvelteKit', 'Svelte 5'],
		href: 'https://language-learn-nine.vercel.app/',
		image: '/work/languagelearn.webp',
		imageWidth: 1200,
		imageHeight: 600,
		imageAlt: 'Language Learn flashcards and a Spanish vocabulary table',
		imagePosition: 'left top'
	},
	{
		id: 'chat-room',
		title: 'The Chat Room',
		label: 'Real-time',
		categories: ['realtime'],
		description: 'Real-time chat with live presence and AI participants that answer in the room.',
		tags: ['SvelteKit', 'WebSockets'],
		href: 'https://github.com/flooyd/chatroom',
		image: '/work/chatroom.webp',
		imageWidth: 1200,
		imageHeight: 571,
		imageAlt: 'The Chat Room landing screen with a pixel-art house',
		imagePosition: 'center'
	}
];

/** Earlier work: text rows, no images. */
export const earlier = [
	{
		id: 'forum',
		title: 'The Forum',
		description: 'Threaded discussion with AI-assisted replies',
		categories: [],
		href: 'https://github.com/flooyd/forum'
	},
	{
		id: 'td-map-editor',
		title: 'TD Map Editor',
		description: 'Tower-defense map editor in Solid.js',
		categories: ['editors', 'games'],
		href: 'https://github.com/flooyd/solidtd'
	},
	{
		id: 'dota2-lfg',
		title: 'Dota 2 LFG',
		description: 'Team finder for Dota 2 players',
		categories: ['games'],
		href: 'https://github.com/flooyd/dota2lfg'
	},
	{
		id: 'curiosity',
		title: 'Curiosity & Friends',
		description: 'Mars rover photos on the NASA API',
		categories: [],
		href: 'https://flooyd.github.io/Curiosity-and-Friends/'
	}
];

/** Hero "Stack" tile chips, in display order. */
export const stack = [
	'React',
	'Svelte 5',
	'SvelteKit',
	'TypeScript',
	'D3.js',
	'Tiptap',
	'WebSockets',
	'Postgres',
	'Claude Code'
];

/** "How I work with Claude" steps. `pair: true` renders the filled CLAUDE + ME badge and the accent border. */
export const steps = [
	{
		num: '01',
		title: 'Spec',
		pair: false,
		text: 'States, edge cases, constraints. I decide what done means before any code exists.'
	},
	{
		num: '02',
		title: 'Draft',
		pair: true,
		text: 'Claude Code builds the first pass of components and tests while I steer.'
	},
	{
		num: '03',
		title: 'Review',
		pair: false,
		text: "I read every diff. Anything I couldn't explain in a code review gets rewritten."
	},
	{
		num: '04',
		title: 'Polish',
		pair: true,
		text: 'Spacing, easing, focus order, zoom. I call the changes, Claude makes them, and we repeat until the details people feel are right.'
	},
	{
		num: '05',
		title: 'Ship',
		pair: false,
		text: 'Keyboard-tested, checked on real devices, and documented for the next engineer.'
	}
];

/** About tile: roles, newest first. */
export const roles = [
	{
		title: 'Freelance Software Developer',
		org: 'Independent',
		dates: '2024.01 — present',
		current: true
	},
	{ title: 'React Developer', org: 'eOne Solutions · Popdock', dates: '2023.01 — 2023.07' },
	{ title: 'UI Engineer', org: 'Codepilot', dates: '2021.01 — 2022.12' },
	{ title: 'React Developer', org: 'Magnus Technologies', dates: '2019.11 — 2020.12' }
];

/** About tile: "What I'm good at". */
export const skills = [
	{
		title: 'Data-heavy interfaces',
		text: 'Tables, charts and filters that stay readable at real volume. I design for the empty state, the slow query and the ten-thousandth row.'
	},
	{
		title: 'Motion with a job',
		text: 'Transitions that show where something came from and where it went. Off for anyone who asks their system for less motion.'
	},
	{
		title: 'Component systems',
		text: 'React and Svelte components with clear props and every state drawn: loading, empty, error, overflowing.'
	},
	{
		title: 'Tools people live in',
		text: 'Built for the keyboard, for dense layouts, and for the person on their four-hundredth record of the day.'
	}
];

/** Contact links. */
export const contact = {
	email: 'floydtjones@gmail.com',
	linkedin: 'https://linkedin.com/in/flooyd',
	github: 'https://github.com/flooyd',
	// The PDF in static/.
	resume: '/Floyd_Jones_Resume.pdf'
};
