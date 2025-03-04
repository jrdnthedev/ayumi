import Login from "@/app/components/auth/login-form/login";
import Modal from "@/app/components/modal/modal";

export default function Page() {
    return (
        <Modal modalId="login-modal">
            <Login />
        </Modal>
    )
}