import { myDataSource } from "../config/app-data-source";
import { Role } from '../entity/role';

export class RoleService {
    private roleRepository = myDataSource.getRepository(Role);

    async getAllRoles(): Promise<Role[]> {
        return this.roleRepository.find({ relations: { users: true } });
    }

    async getRoleById(id: string): Promise<Role | undefined> {
        return this.roleRepository.findOne({ where: { id } });
    }

    async createRole(roleData: Partial<Role>): Promise<Role> {
        const role = this.roleRepository.create(roleData);
        return this.roleRepository.save(role);
    }

    async updateRole(id: string, roleData: Partial<Role>): Promise<Role | undefined> {
        await this.roleRepository.update(id, roleData);
        return this.getRoleById(id);
    }

    async deleteRole(id: string): Promise<void> {
        await this.roleRepository.delete(id);
    }
}
