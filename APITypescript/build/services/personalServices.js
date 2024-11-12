"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonal = exports.updatePersonal = exports.createPersonal = exports.getPersonal = exports.getPersonalOne = void 0;
const conexion = __importStar(require("../config/bd"));
const conn = conexion.conexion;
const getPersonalOne = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [results] = yield conn.query('SELECT * FROM personal WHERE id = ? LIMIT 1', id);
        return results;
    }
    catch (err) {
        console.log(err);
        return { error: "No se puede obtener el personal" };
    }
});
exports.getPersonalOne = getPersonalOne;
const getPersonal = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [results] = yield conn.query('SELECT * FROM personal');
        return results;
    }
    catch (err) {
        console.log(err);
        return { error: "No se puede obtener el personal" };
    }
});
exports.getPersonal = getPersonal;
const createPersonal = (nuevo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [results] = yield conn.query('INSERT INTO personal(nombre,direccion,telefono,estatus) VALUES(?,?,?,?)', [nuevo.nombre, nuevo.direccion, nuevo.telefono, nuevo.estatus]);
        return results;
    }
    catch (err) {
        console.log(err);
        return { error: "No se puede crear el personal" };
    }
});
exports.createPersonal = createPersonal;
const updatePersonal = (modificado) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [results] = yield conn.query('UPDATE personal SET nombre = ?, direccion = ?, telefono = ?, estatus = ? WHERE id = ?', [modificado.nombre, modificado.direccion, modificado.telefono, modificado.estatus, modificado.id]);
        return results;
    }
    catch (err) {
        console.log(err);
        return { error: "No se puede actualizar el personal" };
    }
});
exports.updatePersonal = updatePersonal;
const deletePersonal = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [results] = yield conn.query('DELETE FROM personal WHERE id = ?', [id]);
        return results;
    }
    catch (err) {
        console.log(err);
        return { error: "No se puede eliminar el personal" };
    }
});
exports.deletePersonal = deletePersonal;
