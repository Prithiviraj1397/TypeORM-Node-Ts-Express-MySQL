import { Entity, Column, OneToMany } from "typeorm"
import { BaseEntity } from "./base"
import { User } from './user';
class Access {
    @Column({ type: 'boolean' })
    add: boolean;

    @Column({ type: 'boolean' })
    view: boolean;

    @Column({ type: 'boolean' })
    edit: boolean;

    @Column({ type: 'boolean' })
    delete: boolean;
}

@Entity()
export class Role extends BaseEntity {
    @Column({ unique: true })
    role: string

    @Column('simple-array', { nullable: true })
    permission: string[]

    @Column(() => Access)
    access: Access;

    @OneToMany(() => User, user => user.role)
    users: User[]
}