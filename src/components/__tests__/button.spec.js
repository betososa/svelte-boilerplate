import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import Button from '../Button'

test('Button is rendered correctly', async () => {
  const { getByText } = render(Button, { props: { name: 'Boton' } })
  const button = getByText('Boton')
  expect(button).toHaveTextContent('Boton')
})
