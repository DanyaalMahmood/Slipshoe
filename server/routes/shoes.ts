import express from 'express';
const shoesRouter = express.Router();

import { getShoe, postShoes, updateShoes, getMenShoes, getWomenShoes, getNewarrivals, getBestsellers } from '../controllers/shoes.controller';

import upload from '../middlewares/upload.middleware';


shoesRouter.post('/', upload.single("image"), postShoes);
shoesRouter.patch('/:id', updateShoes);
shoesRouter.get('/:id', getShoe);

shoesRouter.get('/men', getMenShoes);
shoesRouter.get('/women', getWomenShoes);
shoesRouter.get('/newarrivals', getNewarrivals);
shoesRouter.get('/bestsellers', getBestsellers);

export default shoesRouter;