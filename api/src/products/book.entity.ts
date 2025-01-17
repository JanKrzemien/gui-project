import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { UsersBookEntity } from 'src/users/users_book.entity'
import { GroupEntity } from 'src/groups/group.entity'


@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn()
    book_id: number

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    summary: string

    @Column('decimal')
    global_rating: number

    @Column()
    genres: string

    @Column()
    tags: string

    @Column()
    other: string
    
    @Column()
    productPicture: string // base64 encoded picture

    // @ManyToMany(() => UsersBookEntity, user => user.book)
    @OneToMany(() => UsersBookEntity, userBook => userBook.book)
    userConn?:  Promise<UsersBookEntity[]>

    @OneToMany(() => GroupEntity, relatedGroup => relatedGroup.group_id)
    relatedGroup?: GroupEntity[]

    @CreateDateColumn()
    createdAt : String
 
    @UpdateDateColumn()
    updtedAt : String
}
