import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tbl_endereco')
export class Endereco {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 400 })
  logradouro: string;

  @Column({ length: 8 })
  cep: string;

  @Column('int')
  numero: number;

  @Column({ length: 100 })
  bairro: string;

  @Column({ length: 50 })
  cidade: string;
}
