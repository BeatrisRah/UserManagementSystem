export const errorMiddleware = (req, res, next) => {
    res.setError = (message) => {
        req.session.error = {
            message,
            isFirst: true
        }
    }

    if(!req.session.error){
        return next()
    }

    if(req.session.error.isFirst){
        req.session.error.isFirst = false;
        res.locals.error = req.session.error.message;
    } else{
        req.session.error = null;
    }

    next()
}