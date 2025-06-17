import { IsInt, IsOptional, Min } from 'class-validator';

export class UpdateItemDto {
  @IsOptional()
  @IsInt()
  id_pedido?: number;

  @IsOptional()
  @IsInt()
  id_produto?: number;

  @IsOptional()
  @IsInt()
  @Min(1, { message: 'Quantidade deve ser pelo menos 1' })
  qnt?: number;
}
