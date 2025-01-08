import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { UsersBookEntity } from 'src/users/users_book.entity'
import { GroupEntity } from 'src/groups/group.entity'


@Entity()
export class BookEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    summary: string

    @Column()
    genres: string

    @Column()
    tags: string

    @Column()
    other: string
    
    @Column()
    productPicture: string // base64 encoded picture

    @OneToMany(() => UsersBookEntity, user => user.id)
    user: UsersBookEntity[];

    @OneToMany(() => GroupEntity, relatedGroup => relatedGroup.id)
    relatedGroup: GroupEntity[]

    @CreateDateColumn()
    createdAt : String
 
    @UpdateDateColumn()
    updtedAt : String
}
