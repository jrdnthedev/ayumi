"use client";

import { useSocket } from "@/app/components/socket-provider/socketProvider";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ChatRoom() {
    const socket = useSocket();
    const [socketId, setSocketId] = useState<string | undefined>(undefined);
    const [isConnected, setIsConnected] = useState(false);
    const rooms = ["General", "Sports", "Tech"];
    useEffect(() => {
        if (socket) {
            setSocketId(socket.id);
            setIsConnected(socket.connected);

            // Listen for changes in connection state
            socket.on("connect", () => {
                setSocketId(socket.id);
                setIsConnected(true);
            });

            socket.on("disconnect", () => {
                setIsConnected(false);
            });

            return () => {
                socket.off("connect");
                socket.off("disconnect");
            };
        }
    }, [socket]);
    console.log(socket);
    return (
        <>
            {/* <div>
                <h1>Chat Room</h1>
                <p>This is the chat room page</p>
                <p>socket: {socketId}</p>
                <p>isConnected: {isConnected ? 'connected' : 'disconnected'}</p>
            </div> */}

            <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Rooms</h5>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {rooms.map((room: string) => (
                            <li className="py-3 sm:py-4" key={room}>
                                <div className="flex items-center">
                                    <div >
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0 ms-4">
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                            {room}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <Link href={`/chat-room/${room}`}>
                                            Join
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}