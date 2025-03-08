import Navbar from "@/app/components/navbar/navbar";
import { render, screen } from "@testing-library/react";


describe('Navbar Component', () => {

    it('should render the navbar component', () => {
        render(<Navbar />);
        expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Chat Room' })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: 'Login' })).toBeInTheDocument();
    });

    it('should render the modal component when the login button is clicked', async () => {
        render(<Navbar />);
        const loginButton = screen.getByText(/Login/i);
        expect(loginButton).toHaveAttribute('href', '/login');
    });
})