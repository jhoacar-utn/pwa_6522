"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = (0, express_1.Router)();
const avatar_1 = require("../controllers/avatar");
route.get('/', avatar_1.getAvatar);
route.post('/', avatar_1.postAvatar);
exports.default = route;
