const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken")
const JWT_Secret = "secret"

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    });
    res.json({
        msg: "User created successfully"
    })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    const result = await User.find({
        username,
        password
    });

    if (result) {
        const token = jwt.sign(username, JWT_Secret)
        res.json({
            token
        })
    } else {
        res.status(411).json({
            msg: "incorrect Email or Password"
        })
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.username;

    await User.updateOne({
        username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    }
    )
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.username
    })

    const courses =  await Course.find({
        _id :{
            "$in" : user.purchasedCourses
        }
    })
    
    res.json({
        courses: courses
    })
});

module.exports = router