import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <div className="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40"></div>
        </>
    )
}