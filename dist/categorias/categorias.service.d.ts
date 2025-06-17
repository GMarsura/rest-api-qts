import { Repository } from 'typeorm';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from './entities/categoria.entity';
export declare class CategoriasService {
    private readonly repository;
    constructor(repository: Repository<Categoria>);
    create(dto: CreateCategoriaDto): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
    findOne(id: number): Promise<Categoria>;
    update(id: number, dto: UpdateCategoriaDto): Promise<Categoria>;
    remove(id: number): Promise<void>;
}
