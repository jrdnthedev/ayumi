import Login from "@/app/components/auth/login-form/login";
import { render, screen } from "@testing-library/react";

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

});