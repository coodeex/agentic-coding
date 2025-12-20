import { render, screen } from '@testing-library/react'
import Documentation from '../page'

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockLink({ children, href }: { children: React.ReactNode; href: string }) {
    return <a href={href}>{children}</a>
  }
})

describe('Documentation Page', () => {
  it('renders the main heading', () => {
    render(<Documentation />)
    expect(screen.getByRole('heading', { level: 1, name: /documentation/i })).toBeInTheDocument()
  })

  it('renders the back to home link', () => {
    render(<Documentation />)
    const backLink = screen.getByRole('link', { name: /back to home/i })
    expect(backLink).toBeInTheDocument()
    expect(backLink).toHaveAttribute('href', '/')
  })

  it('renders key capability items', () => {
    render(<Documentation />)
    expect(screen.getByText(/automated issue analysis and implementation/i)).toBeInTheDocument()
    expect(screen.getByText(/custom slash commands for repetitive workflows/i)).toBeInTheDocument()
    expect(screen.getByText(/daily session logging and automated commits/i)).toBeInTheDocument()
    expect(screen.getByText(/parallel task execution with git worktrees/i)).toBeInTheDocument()
    // Check that the capability text exists (appears multiple times on page)
    expect(screen.getAllByText(/desktop notifications for claude input requests/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/test-driven development workflows/i)).toBeInTheDocument()
  })

  it('renders key technology items', () => {
    render(<Documentation />)
    expect(screen.getByText(/React framework with typescript support/i)).toBeInTheDocument()
    expect(screen.getByText(/UI library for building components/i)).toBeInTheDocument()
    expect(screen.getByText(/Utility-first CSS framework with PostCSS/i)).toBeInTheDocument()
    expect(screen.getByText(/JavaScript linting for code quality/i)).toBeInTheDocument()
  })

  it('renders main section headings', () => {
    render(<Documentation />)
    expect(screen.getByRole('heading', { name: /what is agentic coding/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /key capabilities/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /project structure/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /key technologies/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /development commands/i })).toBeInTheDocument()
  })

  it('has correct document id attribute', () => {
    const { container } = render(<Documentation />)
    expect(container.querySelector('#documentation')).toBeInTheDocument()
  })

  it('renders the footer text', () => {
    render(<Documentation />)
    expect(screen.getByText(/built with next.js 16 and tailwind css/i)).toBeInTheDocument()
  })
})
