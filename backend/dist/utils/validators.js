import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
        return res.status(422).json({ errors: errors.array() });
    };
};
export const signupValidator = [
    body("name").notEmpty().withMessage("Please enter your name"),
    body("email").trim().isEmail().withMessage("Please enter your email"),
    body("password")
        .trim()
        .isLength({ min: 6 })
        .withMessage("Please enter your password in 6 characters"),
];
//# sourceMappingURL=validators.js.map