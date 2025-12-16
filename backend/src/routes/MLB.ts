import { Router } from "express";
import * as MercadoLivreController from "../controllers/mercadolivre.controller"

const router = Router();

router.get('/scrap/products/:prod', MercadoLivreController.scrapMercadoLivreProducts)
router.post('/generate/affiliate-link', MercadoLivreController.createAffiliateLink)
router.post('/oauth/refresh-token', MercadoLivreController.codeToRefreshToken)
router.post('/oauth/access-token', MercadoLivreController.refreshToAccessToken)
router.get('/search', MercadoLivreController.searchProducts)

export default router;