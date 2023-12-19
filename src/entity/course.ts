import { Entity, Column, ManyToMany, JoinTable } from "typeorm"
import { BaseEntity } from "./base"
import { User } from './user';

@Entity()
export class Course extends BaseEntity {
    @Column()
    name: string

    @ManyToMany(() => User, (user) => user.course)
    @JoinTable()
    users: User[]
}