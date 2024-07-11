"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const registerUser_1 = __importDefault(require("./routes/registerUser"));
const auth_1 = __importDefault(require("./routes/auth"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)().use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use('/register', registerUser_1.default);
app.use('/auth', auth_1.default);
const PORT = process.env.PORT || 10101;
app.listen(PORT, () => {
    console.log("servidor ejecutandose  en el puerto: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
