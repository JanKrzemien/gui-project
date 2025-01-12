import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { UserEntity } from "./user.entity"
import { BookEntity } from "src/products/book.entity"


@Entity()
export class UsersBookEntity {
    @PrimaryColumn()
    userId: number

    @PrimaryColumn()
    bookId: number
    
    @Column()
    status: 'completed' | 'reading' | 'on-hold' | 'dropped' | 'plan to read'

    @Column()
    pagesRead: number

    @Column()
    review?: string

    @Column()
    reviewScore?: -1 | 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5

    @CreateDateColumn()
    createdAt : String

    @ManyToOne(() => UserEntity, user => user.bookConn)
    @JoinColumn({ name: 'userId' })
    user: Promise<UserEntity>

    @ManyToOne(() => BookEntity, (book) => book.userConn)
    @JoinColumn({ name: 'bookId'})
    book: BookEntity
}
