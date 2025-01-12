import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { UserEntity } from "./user.entity"

@Entity()
export class GoalEntity {
    @PrimaryGeneratedColumn()
    goal_id: number

    @Column()
    description: string

    @CreateDateColumn()
    createdAt : String
 
    @Column()
    untilWhen : String

    @ManyToOne(() => UserEntity, user => user.goal)
    user: UserEntity
}
