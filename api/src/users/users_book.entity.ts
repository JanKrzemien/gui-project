import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm"
import { UserEntity } from "./user.entity"
import { BookEntity } from "src/products/book.entity"


@Entity()
export class UsersBookEntity {
    @PrimaryColumn()
    id: number // book id

    @PrimaryColumn()
    userId: number

    @Column()
    username: string
    
    @Column()
    status: 'completed' | 'reading' | 'on-hold' | 'dropped' | 'plan to read'

    @Column()
    pagesRead: number

    @Column()
    review: string

    @Column()
    reviewScore: 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5

    @CreateDateColumn()
    createdAt : String

    @ManyToOne(() => UserEntity, (user) => user.book)
    user: UserEntity

    @ManyToOne(() => BookEntity, (book) => book.user)
    book: BookEntity
}
