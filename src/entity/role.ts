import { Entity, Column } from "typeorm"
import { BaseEntity } from "./base"

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
}