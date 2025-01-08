import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from 'src/users/user.entity'

@Entity()
export class UserAuthEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    role: string

    @Column()
    isActive: boolean

    @OneToOne(() => UserEntity, user => user.id)
    @JoinColumn()
    user: UserEntity
}
