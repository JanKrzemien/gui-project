import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { UserEntity } from "src/users/user.entity"
import { ThreadEntity } from "./thread.entity"


@Entity()
export class CommentEntity {
    @PrimaryGeneratedColumn()
    comment_id: number

    @Column()
    content: string

    @Column()
    awardsNumber: number

    @Column()
    likes: number

    @Column()
    dislikes: number

    @ManyToOne(() => ThreadEntity, thread => thread.comment)
    thread: ThreadEntity

    @ManyToOne(() => UserEntity, user => user.comment)
    user: UserEntity

    @CreateDateColumn()
    createdAt : String
 
    @UpdateDateColumn()
    updtedAt : String
}
