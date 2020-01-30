exports.login = (req, res) => {
    // TODO: validate the user properly
    let { email } = req.body;
    req.session.email = email;
    res.status(200);
}