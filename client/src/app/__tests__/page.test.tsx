import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1, name: /agentic coding/i })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Home />)
    expect(screen.getByText(/exploring how claude can be used as an ai coding agent/i)).toBeInTheDocument()
  })

  it('renders all main sections', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /about this project/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /key capabilities/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /get started/i })).toBeInTheDocument()
  })

  it('renders all capability items', () => {
    render(<Home />)
    const capabilities = [
      'Automated issue analysis and implementation',
      'Custom slash commands for repetitive workflows',
      'Daily session logging and automated commits',
      'Parallel task execution with git worktrees',
      'Desktop notifications for Claude input requests',
      'Test-driven development workflows'
    ]

    capabilities.forEach(capability => {
      expect(screen.getByText(capability)).toBeInTheDocument()
    })
  })

  it('renders the GitHub link with correct attributes', () => {
    render(<Home />)
    const githubLink = screen.getByRole('link', { name: /view on github/i })
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/coodeex/agentic-coding')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the documentation link', () => {
    render(<Home />)
    const docsLink = screen.getByRole('link', { name: /read documentation/i })
    expect(docsLink).toBeInTheDocument()
    expect(docsLink).toHaveAttribute('href', '/docs')
  })

  it('renders the footer text', () => {
    render(<Home />)
    expect(screen.getByText(/built with next.js 16 and tailwind css/i)).toBeInTheDocument()
  })

  it('renders the project overview text', () => {
    render(<Home />)
    expect(screen.getByText(/collection of notes, ideas, and experiments/i)).toBeInTheDocument()
  })
})
