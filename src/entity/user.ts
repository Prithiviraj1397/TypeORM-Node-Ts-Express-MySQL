import { Entity, Column, OneToMany, ManyToMany, JoinTable,ManyToOne } from "typeorm"
import { BaseEntity } from "./base"
import { Role } from './role';
import { Post } from "./post";
import { Course } from './course';

@Entity()
export class User extends BaseEntity {
    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    age: number

    @ManyToOne(() => Role, (role) => role.users)
    role: Role

    @OneToMany(() => Post, (post) => post.user)
    post: Post[]

    @ManyToMany(() => Course, (course) => course.users)
    @JoinTable()
    course: Course[]
}