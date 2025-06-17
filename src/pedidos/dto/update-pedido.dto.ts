import { IsDateString, IsInt, IsOptional } from 'class-validator';

export class UpdatePedidoDto {
  @IsOptional()
  @IsDateString({}, { message: 'Data de elaboração deve ser uma data válida' })
  data_elaboracao?: string;

  @IsOptional()
  @IsInt()
  cliente_id?: number;
}
