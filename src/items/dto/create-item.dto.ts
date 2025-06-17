import { IsInt, Min } from 'class-validator';

export class CreateItemDto {
  @IsInt()
  id_pedido: number;

  @IsInt()
  id_produto: number;

  @IsInt()
  @Min(1, { message: 'Quantidade deve ser pelo menos 1' })
  qnt: number;
}
