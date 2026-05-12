import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the CI/CD learning pipeline with an automated test step', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: 'Source mau gon de hoc CI/CD' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Test' })).toBeInTheDocument()
    expect(screen.getByText('npm test')).toBeInTheDocument()
  })
})
