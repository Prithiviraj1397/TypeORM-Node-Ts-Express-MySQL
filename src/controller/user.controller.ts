import { myDataSource } from "../config/app-data-source";
import { Role } from "../entity/role";
import { User } from "../entity/user";
import { Request, Response } from "express"
const userRepository = myDataSource.getRepository(User);
const roleRepository = myDataSource.getRepository(Role);

// interface userInterface {
//     firstname: string,
//     lastname: string,
//     age: number
// }
export const getAllusers = async (req: Request, res: Response) => {
    const allUsers = await userRepository.find()
    res.json({
        status: true,
        data: allUsers
    })
}

export const getSingleUser = async (req: Request, res: Response) => {
    const firstUser = await userRepository.findOne({
        where: { id: req.params.id },
        relations: {
            role: true,
            post: true
        },
    })
    res.json({
        status: true,
        data: firstUser
    })
}

export const addUser = async (req: Request, res: Response) => {
    let info = req.body;
    const roleData = await roleRepository.findOneBy({
        id: info.roleId,
    });
    info.role = roleData;
    const user = userRepository.create(info);
    const userData = await userRepository.save(user)
    res.json({
        status: true,
        data: userData
    })
}

export const updateUser = async (req: Request, res: Response) => {
    const userUpdate = await userRepository.findOneBy({
        id: req.params.id,
    })
    let info = req.body;
    userUpdate.firstname = info.firstname;
    userUpdate.lastname = info.lastname;
    userUpdate.age = info.age
    await userRepository.save(userUpdate)
    res.json({
        status: true,
        data: userUpdate
    })
}

export const deleteUser = async (req: Request, res: Response) => {
    const firstUser = await userRepository.findOneBy({
        id: req.params.id,
    })
    await userRepository.remove(firstUser)
    res.json({
        status: true,
        data: firstUser
    })
}