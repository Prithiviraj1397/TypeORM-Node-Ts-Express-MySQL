import express, { Request, Response } from 'express';
import { CourseService } from '../controller/course.controller';
import { myDataSource } from '../config/app-data-source';
import { User } from '../entity/user';
const userRepository = myDataSource.getRepository(User);
const router = express.Router();
const courseService = new CourseService();


// Get all roles
router.get('/', async (req: Request, res: Response) => {
    const posts = await courseService.getAllCourses();
    res.json({ status: true, data: posts });
});

// Get role by ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await courseService.getCourseById(id);
    res.json(post);
});

// Create a new course
router.post('/', async (req: Request, res: Response) => {
    let info = req.body;
    let userData = await userRepository.findOneBy({ id: info.userId });
    info.users = userData;
    const newPost = await courseService.createCourse(info);
    res.json({
        status: true,
        data: newPost
    })
});

// Update post by ID
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedRole = await courseService.updateCourse(id, req.body);
    res.json({
        status: true,
        data: updatedRole
    })
});

// Delete Course by ID
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await courseService.deleteCourse(id);
    res.json({
        status: true,
        message: 'Course data successfully deleted'
    })
});

module.exports = router;
