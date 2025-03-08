import Signup from "@/app/components/auth/signup-form/signup";
import { render, screen } from "@testing-library/react";

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
});