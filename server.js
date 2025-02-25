"use client";
import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket) => {
   console.log("a user connected");
   socket.on("message", (message) => {
     broadcastMessage(message);
   });
   socket.on("joinRoom", (room) => {
    console.log("user joined room: " + room);
     socket.join(room);
   });
   socket.on("leaveRoom", (room) => {
    console.log("user left room: " + room);
     socket.leave(room);
   });
   socket.on("disconnect", () => {
     console.log("user disconnected");
   });
  });
  
  const broadcastMessage = (message) => {
    io.emit('message', message);
  };

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
