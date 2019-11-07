import App from './views/App.svelte';
import './utils.css';

const app = new App({
  target: document.body,
  props: {
    name: 'Svelte',
  },
});

export default app;
