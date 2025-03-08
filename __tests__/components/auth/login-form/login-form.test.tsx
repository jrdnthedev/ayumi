import Login from "@/app/components/auth/login-form/login";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

describe('Login Form Component', () => {
    it('should render the login form component', () => {
        render(<Login />);

        expect(screen.getByRole('button', { name: 'Login to your account' })).toBeInTheDocument();
        expect(screen.getByLabelText('Your email')).toBeInTheDocument();
        expect(screen.getByLabelText('Your password')).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Create an account' })).toBeInTheDocument();
    });

    it('should render the login form component with validation errors', async () => {
        render(<Login />);

        const emailInput = screen.getByLabelText('Your email');
        const passwordInput = screen.getByLabelText('Your password');
        const form = screen.getByRole('form');

        // Ensure email field is empty
        fireEvent.change(emailInput, { target: { value: '' } });
        fireEvent.change(passwordInput, { target: { value: '' } });

        // Fire form submission event
        fireEvent.submit(form);

        // Wait for the error message to appear
        await waitFor(() => {
            expect(screen.getByTestId('email-error')).toBeInTheDocument();
            expect(screen.getByTestId('password-error')).toBeInTheDocument();
        });
    });

});