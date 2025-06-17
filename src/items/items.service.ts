import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemPedido } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemPedido)
    private readonly repository: Repository<ItemPedido>,
  ) {}

  async create(createItemDto: CreateItemDto): Promise<ItemPedido> {
    const item = this.repository.create(createItemDto);
    return await this.repository.save(item);
  }

  async findAll(): Promise<ItemPedido[]> {
    return await this.repository.find({ relations: ['pedido', 'produto'] });
  }

  async findOne(id: number): Promise<ItemPedido> {
    const item = await this.repository.findOne({
      where: { id },
      relations: ['pedido', 'produto'],
    });
    if (!item) {
      throw new NotFoundException(`Item #${id} não encontrado`);
    }
    return item;
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<ItemPedido> {
    const item = await this.findOne(id);
    this.repository.merge(item, updateItemDto);
    return await this.repository.save(item);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.repository.remove(item);
  }
}
