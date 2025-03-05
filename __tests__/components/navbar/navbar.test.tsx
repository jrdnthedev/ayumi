import Navbar from "@/app/components/navbar/navbar";
import { render, screen } from "@testing-library/react";

jest.mock("next/router", () => ({
    useRouter: jest.fn(),
}));


describe('Navbar Component', () => {

    it('should render the navbar component', () => {
        render(<Navbar />);
        const navbar = screen.getByText(/Home/i);
        expect(navbar).toBeInTheDocument();
    });

})