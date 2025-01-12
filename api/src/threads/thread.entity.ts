import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { GroupEntity } from 'src/groups/group.entity'
import { CommentEntity } from "./comment.entity"
import { UserEntity } from "src/users/user.entity"


@Entity()
export class ThreadEntity {
    @PrimaryGeneratedColumn()
    thread_id: number

    @Column()
    title: string

    @Column()
    description: string
    
    @Column()
    attachments: string // list of base64 encoded pictures

    @Column()
    categories: string

    @Column()
    tags: string

    @Column()
    other: string

    @Column()
    awardsNum: number

    @Column()
    likes: number

    @Column()
    dislikes: number

    @OneToMany(() => CommentEntity, comment => comment.comment_id)
    comment: CommentEntity[]

    @ManyToOne(() => GroupEntity, group => group.group_id)
    group: GroupEntity

    @ManyToOne(() => UserEntity, user => user.user_id)
    user:  UserEntity

    @CreateDateColumn()
    createdAt : String
 
    @UpdateDateColumn()
    updtedAt : String
}
