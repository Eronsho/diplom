import { Server } from "socket.io";
import { createServer } from "http";
import express, { Router } from "express";
import { config } from "dotenv";
import cors from "cors";
import { sequelize } from "./db";
import { UserClient, UserMod } from "./models/User";
import { Token, UserActions } from "./models/token-modal";
import { Alert } from "./models/alert";
import { ContractClient } from "./models/contract";
import { DescriptionModul, Modul, Role } from "./models/description";
import {
  Comment,
  ProjectClient,
  SetDocuments,
  UserModViews,
  VerificationStatus,
} from "./models/project";
import { router as userRouter } from "./routes/userClient";
import { router as userModRouter } from "./routes/userMod";
import { router as modulRouter } from "./routes/modul";
import { router as contractRouter } from "./routes/contractClient";
import { router as projectRouter } from "./routes/project";
import { router as commentRouter } from "./routes/comments";
import { router as selectRouter } from "./routes/select";
import { userService } from "./service/user-service";
import path from "path";
config();
const app = express();

app.use(express.json());
app.use(cors());
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

const server = createServer(app);
const PORT = process.env.PORT;
const io = new Server(server, {
  cors: {
    origin: `http://localhost:${PORT}`,
  },
});

io.on("connection", (socket) => {
  //connection is up, let's add a simple simple event
  socket.on("message", (message) => {
    //log the received message and send it back to the client
    try {
      const { action, data } = JSON.parse(message.toString());
      console.log(action);
      switch (action) {
        case "tokin":
          // const userTokin = {
          //   id: "156b2a62-8749-42b5-a7a7-481e9ace79a0",
          // email: "er=@MasdweASFr",
          // password: "qwqffwefqfw",
          // contract: 12214,
          // full_name: "kaskf asfsaf asfasf",
          // role: "admin",
          // };
          // const tokens = useController.login();
          // console.log(tokens);
          // tokenService.saveToken(userTokin.id, tokens.refreshToken);

          break;
        case "login":
          // const { email, password } = data;
          // const login = async (email, password) => {
          //   try {
          //     const users = await useController.login(email, password);
          //     const user = await userService.refresh(users.refreshToken);
          //     io.emit("registration", user);
          //   } catch (error) {
          //     console.log(error);
          //   }
          // };
          // login(email, password);

          break;
        case "getUser":
          // const { email, password } = data;
          // const userss = useController.getUsers();
          // const rows = UserClient.findOne({ where: { email } });

          // console.log(userss);
          // io.emit("getUser", { ...userss });
          // io.emit("getUser", rows);

          // console.log("====================================");
          // console.log(rows);
          // console.log("====================================");

          break;
        case "ping":
          const userNods = async () => {
            try {
              const user = await UserClient.findAndCountAll();
              io.emit("getDataCallback", user);
            } catch (error) {
              console.log(error);
            }
          };
          userNods();
          break;
        case "registration":
          const registration = async (res) => {
            const { email, password, contract, full_name, role } = res;
            const userData = await userService.registration({
              email,
              password,
              contract,
              full_name,
            });
            console.log("====================================");
            console.log(userData);
            console.log("====================================");
            io.emit("registration", userData);
          };
          registration(data);
        default:
          break;
      }
    } catch (error) {
      console.log(error, "Скорее всего это не Json  ");
    }
  });

  socket.on("getUser", (message) => {
    //log the received message and send it back to the client
    try {
      const userNods = async () => {
        try {
          const user = await UserClient.findAndCountAll();
          io.emit("getDataCallback", user);
          io.send("getUser", user);
        } catch (error) {
          console.log(error);
        }
      };
      userNods();
    } catch (error) {
      console.log(error, "Скорее всего это не Json  ");
    }
  });
  //send immediatly a feedback to the incoming connection
  socket.emit("Hi there, I am a WebSocket new server");
  socket.emit("message", socket.id);
});

//start our server
server.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.use(userRouter);
    app.use(userModRouter);
    app.use(modulRouter);
    app.use(contractRouter);
    app.use(projectRouter);
    app.use(commentRouter);
    app.use(selectRouter);

    console.log(process.env.DB_PORT);
    console.log(`Server started on port ${PORT} :)`);
  } catch (error) {
    console.log();
  }
});
