import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Produto } from 'src/produtos/entities/produto.entity';
export declare class ItemPedido {
    id: number;
    pedido: Pedido;
    produto: Produto;
    qnt: number;
}
