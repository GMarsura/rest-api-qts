import { Cliente } from 'src/clientes/entities/cliente.entity';
import { ItemPedido } from 'src/items/entities/item.entity';
export declare class Pedido {
    id: number;
    data_elaboracao: string;
    cliente: Cliente;
    itens: ItemPedido[];
}
