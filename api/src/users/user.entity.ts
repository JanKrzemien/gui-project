import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { UsersBookEntity } from 'src/users/users_book.entity'
import { GroupEntity } from 'src/groups/group.entity'
import { GoalEntity } from 'src/users/goal.entity'
import { ThreadEntity } from "src/threads/thread.entity"
import { CommentEntity } from "src/threads/comment.entity"
import { UserAuthEntity } from "src/auth/user_auth.entity"


@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    user_id: number

    @Column()
    username: string
    
    @Column()
    profilePicture: string // base64 encoded picture

    @OneToMany(() => GoalEntity, goal => goal.goal_id)
    goal?: GoalEntity[]

    @OneToMany(() => GroupEntity, group => group.group_id)
    group?: GroupEntity[]

    @OneToMany(() => ThreadEntity, thread => thread.thread_id)
    thread?: ThreadEntity[]

    @OneToMany(() => CommentEntity, comment => comment.comment_id)
    comment?: CommentEntity[]

    // @ManyToMany(() => UsersBookEntity, book => book.user, {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
    @OneToMany(() => UsersBookEntity, userBook => userBook.user)
    // @JoinTable({name: 'user_book', joinColumn: {name: 'user_id', referencedColumnName: 'user_id'}, inverseJoinColumn: {name: 'book_id', referencedColumnName: 'book_id'}})
    bookConn?:  Promise<UsersBookEntity[]>

    @Column()
    aboutMe?: string

    @CreateDateColumn()
    createdAt : String
 
    @UpdateDateColumn()
    updtedAt : String

    @OneToOne(() => UserAuthEntity, userAuth => userAuth.user)
    userAuth: UserAuthEntity
}
