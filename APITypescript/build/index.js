"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
app.get('/', (_req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public', 'index.html'));
});
app.get('/link', (_req, res) => {
    let fecha = new Date().toLocaleDateString();
    res.send(`La fecha de hoy es:${fecha}`);
});
app.get('/listado', (_req, res) => {
    res.send(`Listado..`);
});
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT} http://localhost:3001/`);
});
