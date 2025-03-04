"use client";
import { useRef, useEffect } from "react";

export default function Modal({ modalId, children }: { modalId: string, children: React.ReactNode }) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.focus(); // Ensures focus is set correctly
        }
    }, []);
    return (
        <div id={modalId} ref={modalRef} tabIndex={-1} className="overflow-y-auto overflow-x-hidden flex fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-md max-h-full">
                {children}
            </div>
        </div>
    )
}