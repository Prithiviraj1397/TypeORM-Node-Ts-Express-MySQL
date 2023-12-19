import express, { Request, Response } from 'express';
import { RoleService } from '../controller/role.controller';

const router = express.Router();
const roleService = new RoleService();

// Get all roles
router.get('/', async (req: Request, res: Response) => {
    const roles = await roleService.getAllRoles();
    res.json({ status: true, data: roles });
});

// Get role by ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const role = await roleService.getRoleById(id);
    res.json(role);
});

// Create a new role
router.post('/', async (req: Request, res: Response) => {
    const newRole = await roleService.createRole(req.body);
    res.json({
        status: true,
        data: newRole
    })
});

// Update role by ID
router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedRole = await roleService.updateRole(id, req.body);
    res.json({
        status: true,
        data: updatedRole
    })
});

// Delete role by ID
router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    await roleService.deleteRole(id);
    res.sendStatus(204);
});

module.exports = router;
