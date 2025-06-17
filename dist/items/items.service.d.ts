import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemPedido } from './entities/item.entity';
export declare class ItemsService {
    private readonly repository;
    constructor(repository: Repository<ItemPedido>);
    create(createItemDto: CreateItemDto): Promise<ItemPedido>;
    findAll(): Promise<ItemPedido[]>;
    findOne(id: number): Promise<ItemPedido>;
    update(id: number, updateItemDto: UpdateItemDto): Promise<ItemPedido>;
    remove(id: number): Promise<void>;
}
