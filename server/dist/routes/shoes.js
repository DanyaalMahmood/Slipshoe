"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shoesRouter = express_1.default.Router();
const shoes_controller_1 = require("../controllers/shoes.controller");
const upload_middleware_1 = __importDefault(require("../middlewares/upload.middleware"));
shoesRouter.post('/', upload_middleware_1.default.single("image"), shoes_controller_1.postShoes);
shoesRouter.patch('/:id', shoes_controller_1.updateShoes);
shoesRouter.get('/:id', shoes_controller_1.getShoe);
shoesRouter.get('/men', shoes_controller_1.getMenShoes);
shoesRouter.get('/women', shoes_controller_1.getWomenShoes);
shoesRouter.get('/newarrivals', shoes_controller_1.getNewarrivals);
shoesRouter.get('/bestsellers', shoes_controller_1.getBestsellers);
exports.default = shoesRouter;
