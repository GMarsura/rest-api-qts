import { IsString, IsNotEmpty, IsInt, IsPositive, IsNumber } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsInt()
  id_categoria: number;

  @IsNumber()
  @IsPositive({ message: 'Preço deve ser positivo' })
  preco: number;
}
