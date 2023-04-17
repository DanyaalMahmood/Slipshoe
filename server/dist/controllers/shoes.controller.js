"use strict";
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
exports.getBestsellers = exports.getNewarrivals = exports.getWomenShoes = exports.getMenShoes = exports.getShoe = exports.updateShoes = exports.postShoes = void 0;
const client_1 = require("@prisma/client");
function getErrorMessage(error) {
    if (error instanceof Error)
        return error.message;
    return String(error);
}
const prisma = new client_1.PrismaClient();
function postShoes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newShoe = req.body;
        if (req.file == undefined) {
            res.status(400);
            return res.json({ error: "No file is uploaded" });
        }
        if (req.body.name === undefined || req.body.description === undefined || req.body.gender === undefined || req.body.size === undefined || req.body.quantity === undefined) {
            res.status(400);
            return res.json({ error: "Invalid parameters!" });
        }
        try {
            const createdShoe = yield prisma.shoes.create({
                data: {
                    name: newShoe.name,
                    description: newShoe.description,
                    gender: newShoe.gender,
                    size: parseInt(newShoe.size),
                    quantity: parseInt(newShoe.size),
                    image: req.file.filename
                }
            });
            return res.json(createdShoe);
        }
        catch (error) {
            console.log(error);
            return res.json({ error: "Prisma Error" });
        }
    });
}
exports.postShoes = postShoes;
;
function updateShoes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedShoe = req.body;
        const shoeId = req.params.id;
        if (req.body.name === undefined || req.body.description === undefined || req.body.gender === undefined || req.body.size === undefined || req.body.quantity === undefined) {
            return res.status(400).json({ error: "Invalid parameters!" });
        }
        try {
            const response = yield prisma.shoes.findFirst({
                where: {
                    id: shoeId
                }
            });
            if (response === null) {
                return res.status(400).json({ error: "No shoe with this id exists!" });
            }
        }
        catch (error) {
            console.log('error', error);
            return res.json({ error: 'Prisma error!' });
        }
        try {
            const response = yield prisma.shoes.update({
                where: {
                    id: shoeId
                },
                data: Object.assign({}, updatedShoe)
            });
            return res.json(response);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: "Prisma Error!" });
        }
    });
}
exports.updateShoes = updateShoes;
;
function getShoe(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const shoeId = req.params.id;
        try {
            const response = yield prisma.shoes.findFirst({
                where: {
                    id: shoeId
                }
            });
            if (response === null) {
                return res.status(400).json({ error: "No shoe with this id exists!" });
            }
            return res.json(response);
        }
        catch (error) {
            console.log('error', error);
            return res.json({ error: 'Prisma error!' });
        }
    });
}
exports.getShoe = getShoe;
;
function getMenShoes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const menShoes = yield prisma.shoes.findMany({
                where: {
                    gender: "male"
                }
            });
            return res.json(menShoes);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: "Prisma Error!" });
        }
    });
}
exports.getMenShoes = getMenShoes;
;
function getWomenShoes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const womenShoes = yield prisma.shoes.findMany({
                where: {
                    gender: "female"
                }
            });
            return res.json(womenShoes);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: "Prisma Error!" });
        }
    });
}
exports.getWomenShoes = getWomenShoes;
;
function getNewarrivals(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shoes = yield prisma.shoes.findMany({
                take: 10,
                orderBy: {
                    arrivaldate: "desc"
                }
            });
            return res.json(shoes);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: "Prisma Error!" });
        }
    });
}
exports.getNewarrivals = getNewarrivals;
;
function getBestsellers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const shoes = yield prisma.shoes.findMany({
                take: 10,
                orderBy: {
                    arrivaldate: "desc"
                }
            });
            return res.json(shoes);
        }
        catch (error) {
            console.log(error);
            return res.status(400).json({ error: "Prisma Error!" });
        }
    });
}
exports.getBestsellers = getBestsellers;
;
