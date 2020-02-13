exports.login = (req, res) => {
    // TODO: validate the user properly
    res.end(JSON.stringify({ loggedIn: true }));
};
