import { Router } from "express";
import { registrationContoller } from "../../controllers/registration/userRegistration.controller.js";

export const registrationRoute = Router();

registrationRoute.route('/register').post(registrationContoller)