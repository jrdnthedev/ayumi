import Signup from "@/app/components/auth/signup-form/signup";
import Modal from "@/app/components/modal/modal";

export default function Page() {
    return (
        <Modal modalId="signup-modal">
            <Signup />
        </Modal>
    )
}