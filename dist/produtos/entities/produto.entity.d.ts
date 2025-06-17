import { Categoria } from 'src/categorias/entities/categoria.entity';
import { ItemPedido } from 'src/items/entities/item.entity';
export declare class Produto {
    id: number;
    nome: string;
    categoria: Categoria;
    preco: number;
    itens: ItemPedido[];
}
