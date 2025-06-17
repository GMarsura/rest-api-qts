import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { Pedido } from './entities/pedido.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly repository: Repository<Pedido>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const pedido = this.repository.create(createPedidoDto);
    return await this.repository.save(pedido);
  }

  async findAll(): Promise<Pedido[]> {
    return await this.repository.find({
      relations: ['cliente', 'itens'],
    });
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.repository.findOne({
      where: { id },
      relations: ['cliente', 'itens'],
    });
    if (!pedido) {
      throw new NotFoundException(`Pedido #${id} não encontrado`);
    }
    return pedido;
  }

  async update(id: number, updatePedidoDto: UpdatePedidoDto): Promise<Pedido> {
    const pedido = await this.findOne(id);
    this.repository.merge(pedido, updatePedidoDto);
    return await this.repository.save(pedido);
  }

  async remove(id: number): Promise<void> {
    const pedido = await this.findOne(id);
    await this.repository.remove(pedido);
  }
}
