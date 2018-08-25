module.exports = (app) => {

    app.post('/register', (req, res) => {
	return res.send({
	    message: `Hello ${req.body.email} your user was registerd! Have fun.`
	})
    })
   
}
