const { Router } = require("express");
const { adminMiddleware } = require("../middleware/admin");
const { Admin, Course } = require("../db")
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username,
        password
    })
    res.json({
        msg: "Admin created successsfully"
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    console.log("hi there");    
    
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    });

    res.json({
        message: `Course created successfully`, courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const result = await Course.find({});

    res.json({
        couses: result
    })
});

module.exports = router;