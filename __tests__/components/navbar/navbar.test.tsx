import Navbar from "@/app/components/navbar/navbar";
import { render, screen } from "@testing-library/react";


describe('Navbar Component', () => {

    it('should render the navbar component', () => {
        render(<Navbar />);
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Chat Room/i)).toBeInTheDocument();
        expect(screen.getByText(/Login/i)).toBeInTheDocument();
    });

    it('should render the modal component when the login button is clicked', async () => {
        render(<Navbar />);
        const loginButton = screen.getByText(/Login/i);
        expect(loginButton).toHaveAttribute('href', '/login');
    });
})