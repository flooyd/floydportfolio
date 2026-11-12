// Registers the motion-components custom elements this site uses (https://www.motion-components.dev).
//
// Import this only in the browser, after hydration (the root layout does it in onMount). The
// text elements (motion-headline, motion-scramble, motion-typewriter) rewrite their own children, which must not
// happen while Svelte is still hydrating the server-rendered markup. Until the elements are
// defined, the "motion-components" block in global.css hides what is about to animate in.
import 'motion-components/motion-reveal';
import 'motion-components/motion-stagger';
import 'motion-components/motion-headline';
import 'motion-components/motion-scramble';
import 'motion-components/motion-typewriter';
import 'motion-components/motion-press';
import 'motion-components/motion-magnetic';
import 'motion-components/motion-spotlight';
import 'motion-components/motion-icon';
