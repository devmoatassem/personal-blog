// import formValidation from "../schema/formValidation";

// This middleware is validating data provided by user for registration and login
const userAuthValidation = (userAuthSchema) =>{
    return async (req, res, next) => {
        console.log(req.body);
        try {
            await userAuthSchema.validate(req.body);
            next();
        } catch (error) {
            // console.log(error);
            res.status(400).json({
                message: error.message,
            });
        }
    };

} 

export default userAuthValidation;
