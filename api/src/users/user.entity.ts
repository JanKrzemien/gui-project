import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { UsersBookEntity } from 'src/users/users_book.entity'
import { GroupEntity } from 'src/groups/group.entity'
import { GoalEntity } from 'src/users/goal.entity'
import { ThreadEntity } from "src/threads/thread.entity"
import { CommentEntity } from "src/threads/comment.entity"


@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string
    
    @Column()
    profilePicture: string // base64 encoded picture

    @OneToMany(() => GoalEntity, goal => goal.id)
    goal: GoalEntity[]

    @OneToMany(() => GroupEntity, group => group.id)
    group: GroupEntity[]

    @OneToMany(() => ThreadEntity, thread => thread.id)
    thread: ThreadEntity[]

    @OneToMany(() => CommentEntity, comment => comment.id)
    comment: CommentEntity[]

    @OneToMany(() => UsersBookEntity, book => book.userId)
    book:  UsersBookEntity[]

    @Column()
    aboutMe: string

    @CreateDateColumn()
    createdAt : String
 
    @UpdateDateColumn()
    updtedAt : String
}
