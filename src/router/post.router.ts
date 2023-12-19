import express, { Request, Response } from 'express';
import { PostService } from '../controller/post.controller';
import { myDataSource } from '../config/app-data-source';
import { User } from '../entity/user';
const userRepository = myDataSource.getRepository(User);
const router = express.Router();
const postService = new PostService();


// Get all roles
router.get('/', async (req: Request, res: Response) => {
    const posts = await postService.getAllPosts();
    res.json({ status: true, data: posts });
});

// Get role by ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await postService.getPostById(id);
    res.json(post);
});

// Create a new role
router.post('/', async (req: Request, res: Response) => {
    let info = req.body;
    let userData = await userRepository.findOneBy({ id: info.userId });
    info.user = userData;
    const newPost = await postService.createPost(info);
    res.json({
        status: true,
        data: newPost
    })
});

// Update post by ID
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedRole = await postService.updatePost(id, req.body);
    res.json({
        status: true,
        data: updatedRole
    })
});

// Delete role by ID
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await postService.deletePost(id);
    res.json({
        status: true,
        message: 'Post data successfully deleted'
    })
});

module.exports = router;
