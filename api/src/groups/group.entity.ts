import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { ThreadEntity } from "src/threads/thread.entity"
import { UserEntity } from "src/users/user.entity"
import { BookEntity } from "src/products/book.entity"


@Entity()
export class GroupEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string
    
    @Column()
    groupPicture: string // base64 encoded picture

    @OneToMany(() => ThreadEntity, thread => thread.id)
    thread: ThreadEntity[]

    @ManyToOne(() => UserEntity, user => user.group)
    user: UserEntity

    @ManyToOne(() => BookEntity, relatedTo => relatedTo.relatedGroup)
    relatedTo:  BookEntity

    @CreateDateColumn()
    createdAt : String
 
    @UpdateDateColumn()
    lastActive : String
}
