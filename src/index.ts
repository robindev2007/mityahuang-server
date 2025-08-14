import http, { Server } from "http";
import app from "./app";

import env from "./config/clean-env";

import { Server as SocketIO_Server } from "socket.io";
import corsOptions from "./config/corsOption";
import { urlFrontEnd } from "./lib/utils/baseUrl";
import seedSuperAdmin from "./lib/utils/seeding-super-admin";

let server: Server;

// Server initialization (server.ts)
server = http.createServer(app);

// init the socket
// At the top of your server file (where you initialize Socket.IO)
export const io = new SocketIO_Server(server, {
  cors: corsOptions,
  transports: ["websocket", "polling"], // ✅ Required for Docker
  allowUpgrades: true,
});

// Initializing the server
async function startServer() {
  try {
    console.log("📌 Starting main function...");
    console.log("📦 PORT:", env.PORT);

    console.log("⛏ Seeding admin...");
    await seedSuperAdmin();

    console.log(urlFrontEnd);
    console.log("🌱 admin seeded");

    // Start server
    server.listen(Number(env.PORT), "0.0.0.0", () => {
      console.log(
        `🚀 Server running on http://0.0.0.0:${env.PORT} or http://localhost:${env.PORT}`,
      );
    });

    // Make io accessible globally
  } catch (error: any) {
    console.error("Failed to connect to MongoDB", error.stack || error);
    process.exit(1);
  }
}

startServer();

process.on("unhandledRejection", (m, reason) => {
  console.log("⚠️☠️ Server closed by unhandledRejection", reason);
  console.log("🚀 ~ process.on ~ server:", server);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on("uncaughtException", (error) => {
  console.log("⚠️☠️ Server closed by uncaught exception", error.stack || error);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});
