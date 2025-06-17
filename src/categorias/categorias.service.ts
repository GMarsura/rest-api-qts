import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';

@Injectable()
export class CategoriasService {

  constructor(
    @InjectRepository(Categoria)
    private readonly repository: Repository<Categoria>,
  ) {}

  async create(dto: CreateCategoriaDto): Promise<Categoria> {
    const categoria = this.repository.create(dto);
    return await this.repository.save(categoria);
  }

  async findAll(): Promise<Categoria[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.repository.findOneBy({ id });
    if (!categoria) {
      throw new NotFoundException(`Categoria #${id} não encontrada`);
    }
    return categoria;
  }

  async update(id: number, dto: UpdateCategoriaDto): Promise<Categoria> {
    const categoria = await this.findOne(id);
    this.repository.merge(categoria, dto);
    return await this.repository.save(categoria);
  }

  async remove(id: number): Promise<void> {
    const categoria = await this.findOne(id);
    await this.repository.remove(categoria);
  }
}
