import { Entity, Column, OneToOne, OneToMany, JoinColumn, ManyToMany, JoinTable } from "typeorm"
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

    @OneToOne(() => Role)
    @JoinColumn()
    role: Role

    @OneToMany(() => Post, (post) => post.user)
    post: Post[]

    @ManyToMany(() => Course, (course) => course.users)
    @JoinTable()
    course: Course[]
}