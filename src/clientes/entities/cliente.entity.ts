import { Column , Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('tbl_cliente')
export class Cliente {
      
      @PrimaryGeneratedColumn({ name: 'id_team' })
      codigo: number;
    
      @Column()
      telefone: string;
    
      @Column()
      nome: string;
    
      @Column()
      limite: number;
    
      @Column()
      id_endereco: number;
    
      @Column()
      id_status: number;
}
