"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const personalRoutes_1 = __importDefault(require("./routes/personalRoutes"));
const app = express();
const PORT = 3001;
//asddddklsdklfsjdfjs
app.use(express.json());
app.use('/api/personal', personalRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT} http://localhost:3001/`);
});
