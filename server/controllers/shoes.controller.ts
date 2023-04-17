import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';


function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
}

const prisma = new PrismaClient();

interface bodyShoe {
    name: string;
    description: string;
    gender: string;
    size: string;
    quantity: string;
}

interface bodyShoeJSON {
    name: string;
    description: string;
    gender: string;
    size: number;
    quantity: number;
}

interface Shoe {
    id: string;
    name: string;
    description: string;
    gender: string;
    size: number;
    quantity: number;
    image: string;
}

export async function postShoes(req: Request, res: Response) {
    const newShoe: bodyShoe = req.body;

    if (req.file == undefined) {
        res.status(400);
        return res.json({ error: "No file is uploaded" });
    }

    if (req.body.name === undefined || req.body.description === undefined || req.body.gender === undefined || req.body.size === undefined || req.body.quantity === undefined) {
        res.status(400);
        return res.json({ error: "Invalid parameters!" });
    }

    try {

        const createdShoe: Shoe = await prisma.shoes.create({
            data: {
                name: newShoe.name,
                description: newShoe.description,
                gender: newShoe.gender,
                size: parseInt(newShoe.size),
                quantity: parseInt(newShoe.size),
                image: req.file.filename
            }
        })
        return res.json(createdShoe);

    } catch (error) {
        console.log(error);
        return res.json({ error: "Prisma Error" });
    }

};

export async function updateShoes(req: Request, res: Response) {
    const updatedShoe: bodyShoeJSON = req.body;
    const shoeId: string = req.params.id;

    if (req.body.name === undefined || req.body.description === undefined || req.body.gender === undefined || req.body.size === undefined || req.body.quantity === undefined) {
        return res.status(400).json({ error: "Invalid parameters!" });
    }

    try {
        const response = await prisma.shoes.findFirst({
            where: {
                id: shoeId
            }
        });

        if (response === null) {
            return res.status(400).json({ error: "No shoe with this id exists!" })
        }

    } catch (error) {
        console.log('error', error);
        return res.json({ error: 'Prisma error!' })
    }

    try {
        const response = await prisma.shoes.update({
            where: {
                id: shoeId
            },
            data: {
                ...updatedShoe
            }
        });

        return res.json(response);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: "Prisma Error!" });
    }
};

export async function getShoe(req: Request, res: Response) {
    const shoeId: string = req.params.id;


    try {
        const response = await prisma.shoes.findFirst({
            where: {
                id: shoeId
            }
        });

        if (response === null) {
            return res.status(400).json({ error: "No shoe with this id exists!" })
        }

        return res.json(response);

    } catch (error) {
        console.log('error', error);
        return res.json({ error: 'Prisma error!' })
    }

};

export async function getMenShoes(req: Request, res: Response) {

    try {
        const menShoes: Shoe[] = await prisma.shoes.findMany({
            where: {
                gender: "male"
            }
        });
        return res.json(menShoes);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: "Prisma Error!" });
    }

};

export async function getWomenShoes(req: Request, res: Response) {
    try {
        const womenShoes: Shoe[] = await prisma.shoes.findMany({
            where: {
                gender: "female"
            }
        });
        return res.json(womenShoes);

    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: "Prisma Error!" });
    }
};


export async function getNewarrivals(req: Request, res: Response) {
    try {
        const shoes: Shoe[] = await prisma.shoes.findMany({
            take: 10,
            orderBy: {
                arrivaldate: "desc"
            }
        });

        return res.json(shoes);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ error: "Prisma Error!" })
    }
};

export async function getBestsellers(req: Request, res: Response) {
    try {
        const shoes: Shoe[] = await prisma.shoes.findMany({
            take: 10,
            orderBy: {
                arrivaldate: "desc"
            }
        });

        return res.json(shoes);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ error: "Prisma Error!" })
    }
};