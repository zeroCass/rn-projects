require('dotenv').config()
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) return res.status(400).send('Dados incompletos')

        const user = await app.db('users')
            .whereRaw('LOWER(email) = LOWER(?)', req.body.email)
            .first()
        // console.log('Signin - user:', user)
        if (user) {
           bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err || !isMatch) {
                    // console.log(err, isMatch)
                    return res.status(401).send()
                }

                const payload = { id: user.id }
                res.json({
                    name: user.name,
                    email: user.email,
                    token: jwt.encode(payload, process.env.AUTH_SECRET),
                })
           }) 
        }
        else {
            res.status(400).send('Usuario nao cadastrado')
        }
        
    }
    return { signin }
}