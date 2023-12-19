import { Entity, Column, ManyToOne } from "typeorm"
import { BaseEntity } from "./base"
import { User } from './user';

@Entity()
export class Post extends BaseEntity {
    @Column()
    name: string

    @Column()
    description: string

    @ManyToOne(() => User,(user)=>user.post)
    user:User
}