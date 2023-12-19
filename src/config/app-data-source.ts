import { DataSource } from "typeorm"
import { User } from "../entity/user"
import { Role } from "../entity/role"
import { Post } from '../entity/post'
import { Course } from "../entity/course"


export const myDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "typeorm",
    entities: [User, Role, Post, Course],
    migrations: ["src/config/migrations/*.ts"],
    synchronize: true,
    migrationsRun: true,
    logging: false,
    // cli: {
    //     migrationsDir: "src/config/migrations"
    // },


})