import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("SADEPO")
export class AlmacenesEntity {

    @PrimaryColumn()
    readonly CodUbic: string;

    @Column()
    readonly Descrip: string;

}
