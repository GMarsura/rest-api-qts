import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_categoria')
export class Categoria {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30 })
  nome: string;

}
