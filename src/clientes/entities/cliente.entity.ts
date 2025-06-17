import { Column , Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('tbl_cliente')
export class Cliente {
      
      @PrimaryGeneratedColumn()
      id: number;
    
      @Column()
      telefone: string;
    
      @Column()
      nome: string;
    
      @Column()
      limite: number;
    
      @Column()
      id_endereco: number;
    
      @Column()
      status: string;
}
