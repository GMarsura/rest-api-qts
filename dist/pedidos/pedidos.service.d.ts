import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';
export declare class PedidosService {
    private readonly repository;
    constructor(repository: Repository<Pedido>);
    create(createPedidoDto: CreatePedidoDto): Promise<Pedido>;
    findAll(): Promise<Pedido[]>;
    findOne(id: number): Promise<Pedido>;
    update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido>;
    remove(id: number): Promise<void>;
}
