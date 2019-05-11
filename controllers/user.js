/*const {secret} = 'worldisfullofdevelopers';
let jwt = require('jsonwebtoken');*/

const User = require("../model/Users");
let bcrypt = require('bcrypt');

exports.register = async (req,res) =>{

    let {username, password} = req.body;

    const newUser = await User.findOne({username: username});

    if(newUser)
    {
        return res.send({
            success: false,
            message: 'User is already exist!'
        });
    }
    else
    {
        const saltRounds = 10;

        bcrypt.hash(password,saltRounds,function (err, hash) {

            const newUser = new User({
                username: username,
                password: hash
            });

            newUser.save()
                .then(user =>{
                    res.send({
                        success: true,
                        data: user

                    });

                })
                .catch(err => {
                    res.status({
                        success: false,
                        error: err.message
                    })
                })
        })
    }
    /*User.findOne({user_name: user_name}, function (err, user) {
        if(err){
            res.send("some thing wrong");
        }
        if(user)
        {
           res.send({message:"Tai khoan da ton tai."});
        }
        else
        {
            const saltRounds = 10;
            bcrypt.hash(password,saltRounds,function (err, hash) {
                const newUser = new User({
                    user_name: user_name,
                    password: hash
                });
                newUser.save()
                    .then(user =>{
                        res.send({
                            success: true,
                            message: "register done."

                        });

                    })
                    .catch(err => {
                        res.status({
                            success: false,
                            error: err.message
                        })
                    })
            })
        }

    })
*/
};

/*
exports.Login = (req, res) =>
{
    let {user_name, passoword} = req.body;

    User.findOne({user_name: user_name})
        .then(function (user) {
            if(!user)
            {
                //res.redirect('/');
                res.send("User k ton tai")
            }
            else
            {
                bcrypt.compare(passSignUp, user.password,function (err, result) {
                    if(result == true)
                    {
                        let token = jwt.sign({user_name: user_name, id: user._id},
                            secret,
                            {
                                expiresIn: '24h' // expires in 24 hours
                            }
                        );
                        res.json({
                            success: true,
                            token: token
                        });
                    }
                    else
                    {
                        res.send('Incorrect password');
                        //res.redirect('/');
                    }

                })
            }

        })
};
exports.checkToken = (req, res) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];

    if (token) {
        jwt.verify(token, config.secret, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};*/
