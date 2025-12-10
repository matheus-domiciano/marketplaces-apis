// src/routes/index.ts
import { Router } from "express";
import MLBRoutes from "./MLB";

const router = Router();

router.use("/mercado-livre", MLBRoutes);
router.use("/shopee", (req, res)=>{
    res.status(501).json({
        messagem: 'Endpoint insisponivel no momento.'
    })
});
router.use("/amazon", (req, res)=>{
    res.status(501).json({
        messagem: 'Endpoint insisponivel no momento.'
    })
});

export default router;
