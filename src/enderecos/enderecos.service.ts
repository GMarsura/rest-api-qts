import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';

@Injectable()
export class EnderecosService {
  constructor(
    @InjectRepository(Endereco)
    private readonly repository: Repository<Endereco>,
  ) {}

  async create(createEnderecoDto: CreateEnderecoDto): Promise<Endereco> {
    const endereco = this.repository.create(createEnderecoDto);
    return await this.repository.save(endereco);
  }

  async findAll(): Promise<Endereco[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Endereco> {
    const endereco = await this.repository.findOneBy({ id });
    if (!endereco) {
      throw new NotFoundException(`Endereço #${id} não encontrado`);
    }
    return endereco;
  }

  async update(id: number, updateEnderecoDto: UpdateEnderecoDto): Promise<Endereco> {
    const endereco = await this.findOne(id);
    this.repository.merge(endereco, updateEnderecoDto);
    return await this.repository.save(endereco);
  }

  async remove(id: number): Promise<void> {
    const endereco = await this.findOne(id);
    await this.repository.remove(endereco);
  }
}
