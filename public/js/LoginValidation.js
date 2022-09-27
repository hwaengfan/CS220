module.exports = async function (req, res) {
    if (req.body.user == "123456") {
        if (req.body.password == "123456") {
            res.send("login");
        }
        else {
            res.send("wrong password");
        }
    }
    else {
        res.send('wrong email or phone');
    }
};;