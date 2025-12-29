import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login Component', () => {
  const mockOnLoginSuccess = jest.fn();

  beforeEach(() => {
    mockOnLoginSuccess.mockClear();
  });

  test('renders login card with title', () => {
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('renders email input field', () => {
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const emailInput = screen.getByLabelText('Email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  test('renders password input field', () => {
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  test('renders forgot password link', () => {
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const forgotPasswordLink = screen.getByText('Forgot password?');
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(forgotPasswordLink).toHaveAttribute('href', '#forgot-password');
  });

  test('renders create account link', () => {
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const createAccountLink = screen.getByText('Create account');
    expect(createAccountLink).toBeInTheDocument();
    expect(createAccountLink).toHaveAttribute('href', '#create-account');
  });

  test('renders submit button', () => {
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    expect(submitButton).toBeInTheDocument();
  });

  test('updates email input value on change', async () => {
    const user = userEvent.setup();
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const emailInput = screen.getByLabelText('Email');

    await user.type(emailInput, 'test@example.com');
    expect(emailInput).toHaveValue('test@example.com');
  });

  test('updates password input value on change', async () => {
    const user = userEvent.setup();
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const passwordInput = screen.getByLabelText('Password');

    await user.type(passwordInput, 'password123');
    expect(passwordInput).toHaveValue('password123');
  });

  test('shows error message when fields are empty', async () => {
    const user = userEvent.setup();
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.click(submitButton);
    expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();
  });

  test('shows error message for invalid email', async () => {
    const user = userEvent.setup();
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.type(emailInput, 'invalid-email');
    await user.type(passwordInput, 'password123');
    await user.click(submitButton);

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
  });

  test('shows error for invalid credentials', async () => {
    const user = userEvent.setup();
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.type(emailInput, 'test@example.com');
    await user.type(passwordInput, 'wrongpassword');
    await user.click(submitButton);

    expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
  });

  test('calls onLoginSuccess with correct credentials', async () => {
    const user = userEvent.setup();
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.type(emailInput, 'hasinih051@gmail.com');
    await user.type(passwordInput, '12345');
    await user.click(submitButton);

    expect(mockOnLoginSuccess).toHaveBeenCalledWith('hasinih051@gmail.com');
  });

  test('clears error message on new input', async () => {
    const user = userEvent.setup();
    render(<Login onLoginSuccess={mockOnLoginSuccess} />);
    const submitButton = screen.getByRole('button', { name: 'Submit' });

    await user.click(submitButton);
    expect(screen.getByText('Please fill in all fields')).toBeInTheDocument();

    const emailInput = screen.getByLabelText('Email');
    await user.type(emailInput, 'test@example.com');

    expect(screen.queryByText('Please fill in all fields')).not.toBeInTheDocument();
  });
});

