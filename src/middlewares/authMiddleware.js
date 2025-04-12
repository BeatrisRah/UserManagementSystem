export const setUser = (req, res, next) => {
    res.setUser = ({username, role, id}) => {
    req.session.user = {
        username: username,
        role: role,
        id: id
    }
    }

    if(req.session.user){
        req.user = req.session.user
        res.locals.user = req.session.user
    }

    next()
}

export const isAuth = (req, res, next) => {
    if (!req.user) {
        res.setError('You must be logged in in order to do that!')
        return res.redirect('/404');
    } 

    next();
}