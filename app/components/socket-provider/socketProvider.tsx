"use client";
import { Socket, io } from '@/socket';
import { createContext, useContext, useEffect, useState } from "react";

interface SocketContextType {
    socket: Socket | null;
    messagesByRoom: { [roomId: string]: string[] };
    sendMessage: (roomId: string, message: string) => void;
    joinRoom: (roomId: string) => void;
    leaveRoom: (roomId: string) => void;
}

const SocketContext = createContext<SocketContextType | null>(null);

export function SocketProvider({ children }: { children: React.ReactNode }) {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [messagesByRoom, setMessagesByRoom] = useState<{ [roomId: string]: string[] }>({});
    const [currentRoom, setCurrentRoom] = useState<string | null>(null);

    useEffect(() => {
        const newSocket = io("http://localhost:3000");
        setSocket(newSocket);
        return () => {
            newSocket.disconnect();
        };
    }, []);

    const sendMessage = (roomId: string, message: string) => {
        if (socket && message.trim()) {
            socket.emit("message", roomId, message);
            setMessagesByRoom(prev => ({
                ...prev,
                [roomId]: [...(prev[roomId] || []), message],
            }));
        }
    };

    const joinRoom = (roomId: string) => {
        if (socket && roomId !== currentRoom) {
            if (currentRoom) socket.emit("leaveRoom", currentRoom);
            socket.emit("joinRoom", roomId);
            setCurrentRoom(roomId);
        }
    };

    const leaveRoom = (roomId: string) => {
        if (socket && currentRoom === roomId) {
            socket.emit("leaveRoom", roomId);
            setCurrentRoom(null);
        }
    };

    return (
        <SocketContext value={{ socket, messagesByRoom, sendMessage, joinRoom, leaveRoom }}>
            {children}
        </SocketContext>
    );
}

export function useSocket() {
    return useContext(SocketContext);
}
