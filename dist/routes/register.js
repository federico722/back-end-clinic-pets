"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const registerUser_controller_1 = __importDefault(require("../controllers/registerUser-controller"));
const registerUser_validator_1 = require("../middlewere/registerUser-validator");
const router = express_1.default.Router();
router.post('/', registerUser_validator_1.validatorParams, registerUser_validator_1.validator, registerUser_controller_1.default);
exports.default = router;
