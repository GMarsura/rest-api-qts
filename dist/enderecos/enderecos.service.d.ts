import { Repository } from 'typeorm';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { Endereco } from './entities/endereco.entity';
export declare class EnderecosService {
    private readonly repository;
    constructor(repository: Repository<Endereco>);
    create(createEnderecoDto: CreateEnderecoDto): Promise<Endereco>;
    findAll(): Promise<Endereco[]>;
    findOne(id: number): Promise<Endereco>;
    update(id: number, updateEnderecoDto: UpdateEnderecoDto): Promise<Endereco>;
    remove(id: number): Promise<void>;
}
