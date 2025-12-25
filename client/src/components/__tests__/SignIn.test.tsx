import { render, screen, fireEvent } from '@testing-library/react'
import { signIn } from 'next-auth/react'
import { SignIn } from '../SignIn'

jest.mock('next-auth/react')

describe('SignIn Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders sign in button', () => {
    render(<SignIn />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test("button displays 'Sign in with Google' text", () => {
    render(<SignIn />)
    const button = screen.getByRole('button', { name: /sign in with google/i })
    expect(button).toBeInTheDocument()
  })

  test('calls signIn with google provider when button clicked', () => {
    render(<SignIn />)
    const button = screen.getByRole('button', { name: /sign in with google/i })

    fireEvent.click(button)

    expect(signIn).toHaveBeenCalledWith('google', {
      redirect: true,
      redirectTo: '/',
    })
  })
})
