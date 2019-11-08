import { storiesOf } from '@storybook/svelte';
import { action } from '@storybook/addon-actions';

import Button from './components/Button.svelte'
import ButtonNotes from './test.md';

// export const simpleButton = () => ({
//   Component: Button,
//   props: {
//     name: "story"
//   }
// })

``
storiesOf('Buttons')
  .add(
    'Lame',
    () => ({
      Component: Button,
      props: { name: 'Lame' }
    }),
    { notes: { markdown: ButtonNotes } }
  )
