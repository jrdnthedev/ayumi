"use client";
interface ModalProps {
    modalId: string;
    children: React.ReactNode;
}
export default function Modal({ modalId, children }: ModalProps) {
    return (
        <div id={modalId} tabIndex={-1} className="overflow-y-auto overflow-x-hidden flex absolute h-screen z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    {children}
                </div>
            </div>
        </div>
    )
}