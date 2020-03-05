const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const userSchema = require("../models/customer");
const authorize = require("../middlewares/auth");
const { check, validationResult } = require('express-validator');




// Sign-up
router.post("/signup", 
[
    check('userName')
    .not()
    .isEmpty()
    .isLength({ min: 3 }),
    check('firstName')
        .not()
        .isEmpty()
        .isLength({ min: 3 })
        .withMessage('First Name must be atleast 3 characters long'),
    check('lastName')
        .not()
        .isEmpty()
        .isLength({ min: 3})
        .withMessage('Last Name must be at least 3 characters long'),

    check('email', 'Email is required')
        .not()
        .isEmpty(),
    check('password', 'Password should be between 5 to 8 characters long')
        .not()
        .isEmpty()
        .isLength({ min: 8, max: 20 })
],(req, res, next) => {
    const errors = validationResult(req);
        console.log(req.body);
        if (!errors.isEmpty()) {
            return res.status(422).jsonp(errors.array());
        }
        else {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new userSchema({
            firstName: req.body.firstName,
            userName: req.body.userName,
            lastName: req.body.lastName,
            address: req.body.address,
            city: req.body.city,
            postalCode: req.body.postalCode,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            lastAccess: req.body.lastAccess,
            password: hash
        });
        user.save().then((response) => {
            res.status(201).json({
                message: "User successfully created!",
                result: response
            });
        }).catch(error => {
            res.status(500).json({
                error: error
            });
        });
    });
}
});


// Sign-in
router.post("/login", (req, res, next) => {
    let getUser;
    userSchema.findOne({
        email: req.body.email
    }).then(user => {
        if (!user) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        getUser = user;
        return bcrypt.compare(req.body.password, user.password);
    }).then(response => {
        if (!response) {
            return res.status(401).json({
                message: "Authentication failed"
            });
        }
        let jwtToken = jwt.sign({
            email: getUser.email,
            userId: getUser._id
        }, "longer-secret-is-better", {
            expiresIn: "1h"
        });
        res.status(200).json({
            token: jwtToken,
            expiresIn: 3600,
            msg: getUser
        });
    }).catch(err => {
        return res.status(401).json({
            message: "Authentication failed"
        });
    });
});

// Get Users
router.route('/').get(authorize,(req, res) => {
    userSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})

// // Get Single User
// router.route('/userprofile/:id').get(authorize,(req, res, next) => {
//     userSchema.findById(req.params.id, (error, data) => {
//         if (error) {
//             return next(error);
//         } else {
//             res.status(200).json({
//                 res: data
//             })
//         }
//     })
// })

router.get('/userprofile/:id', async (req, res) => {
    console.log(req.params.id);
    const singleUser = await userSchema.findById(req.params.id);
  
    if (!singleUser) return res.status(404).send('The customer with the given ID was not found.');
  
    res.send(singleUser._id);
});

// Update User
router.route('/updateuser/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('User successfully updated!')
        }
    })
})


// Delete User
router.route('/deleteuser/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = router;