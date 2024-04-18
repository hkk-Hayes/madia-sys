import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')  // 表名
export class User {


    @Column() // 字段
    name: string;

    @Column() // 字段
    level: number;

    @Column() // 字段
    password: string;

    @Column() // 字段
    useid: number;
}
