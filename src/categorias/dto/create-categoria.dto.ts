import { IsString, Length } from 'class-validator';

export class CreateCategoriaDto {
  
  @IsString({ message: 'O nome deve ser uma string' })
  nome: string;

}
