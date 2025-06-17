import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Categoria } from 'src/categorias/entities/categoria.entity';
import { ItemPedido } from 'src/items/entities/item.entity';

@Entity('tbl_produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  nome: string;

  @ManyToOne(() => Categoria, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'id_categoria' })
  categoria: Categoria;

  @Column('float')
  preco: number;

  @OneToMany(() => ItemPedido, item => item.produto)
  itens: ItemPedido[];
}
