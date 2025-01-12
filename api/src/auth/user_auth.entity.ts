import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from 'src/users/user.entity'

@Entity()
export class UserAuthEntity {
    @PrimaryGeneratedColumn()
    auth_id: number

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    role: string

    @Column()
    isActive: boolean

    @OneToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity
}
