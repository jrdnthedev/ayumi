import Signup from "@/app/components/auth/signup-form/signup";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

describe('Signup Form Component', () => {

    it('should render the signup form component', () => {
        render(<Signup />);
        expect(screen.getByRole('button', { name: 'Create Account' })).toBeInTheDocument();
        expect(screen.getByLabelText('Your email')).toBeInTheDocument();
        expect(screen.getByLabelText('Your password')).toBeInTheDocument();
        expect(screen.getByLabelText('Firstname')).toBeInTheDocument();
        expect(screen.getByLabelText('Lastname')).toBeInTheDocument();
    });

    it('should render the signup form component with validation errors', async () => {
        render(<Signup />);
        const emailInput = screen.getByLabelText('Your email');
        const firstNameInput = screen.getByLabelText('Firstname');
        const lastNameInput = screen.getByLabelText('Lastname');
        const passwordInput = screen.getByLabelText('Your password');
        const form = screen.getByRole('form');
        // Ensure email field is empty
        fireEvent.change(emailInput, { target: { value: '' } });
        fireEvent.change(passwordInput, { target: { value: '' } });
        fireEvent.change(firstNameInput, { target: { value: '' } });
        fireEvent.change(lastNameInput, { target: { value: '' } });
        // Fire form submission event
        fireEvent.submit(form);
        // Wait for the error message to appear
        await waitFor(() => {
            expect(screen.getByTestId('email-error')).toBeInTheDocument();
            expect(screen.getByTestId('password-error')).toBeInTheDocument();
            expect(screen.getByTestId('firstName-error')).toBeInTheDocument();
            expect(screen.getByTestId('lastName-error')).toBeInTheDocument();
        });
    });
});