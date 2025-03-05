import Modal from "@/app/components/modal/modal";
import { render, screen } from "@testing-library/react";

describe('Modal Component', () => {

    it('should render the modal component', () => {
        render(<Modal modalId="modal" children={<div>Modal Content</div>} />);
        const modal = screen.getByText(/Modal Content/i);
        expect(modal).toBeInTheDocument();
    });
})