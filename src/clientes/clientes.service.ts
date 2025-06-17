import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  
  constructor(
    @InjectRepository(Cliente)
    private readonly repository: Repository<Cliente>,
  ) {}

  create(dto: CreateClienteDto) {
    const cliente = this.repository.create(dto);
    return this.repository.save(cliente);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findOne({ where: { id: id } });
  }

  update(id: number, dto: UpdateClienteDto) {
    return this.repository.update({ id: id }, dto);
  }

  remove(id: number) {
    return this.repository.delete({ id: id });
  }
}
