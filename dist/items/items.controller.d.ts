import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    create(createItemDto: CreateItemDto): Promise<import("./entities/item.entity").ItemPedido>;
    findAll(): Promise<import("./entities/item.entity").ItemPedido[]>;
    findOne(id: string): Promise<import("./entities/item.entity").ItemPedido>;
    update(id: string, updateItemDto: UpdateItemDto): Promise<import("./entities/item.entity").ItemPedido>;
    remove(id: string): Promise<void>;
}
