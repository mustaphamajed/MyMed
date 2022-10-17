import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity("patient")
export class Patient {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    phone: number

}