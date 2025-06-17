import { IsDateString, IsInt } from 'class-validator';

export class CreatePedidoDto {
  @IsDateString({}, { message: 'Data de elaboração deve ser uma data válida' })
  data_elaboracao: string;

  @IsInt()
  cliente_id: number;
}
