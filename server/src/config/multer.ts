import { Request, Response } from "express";
import multer, { FileFilterCallback } from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
let fs = require("fs-extra");
let storage = multer.diskStorage({
  destination: function (req: Request, file, cb) {
    let { modul } = req.body;
    let paths = path.join(__dirname, `../tmp/modul/${modul}`);
    fs.mkdirsSync(paths);
    cb(null, paths);
  },
  filename: (req: Request, file, cb) => {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage: storage });

// single("file");

export { upload };
