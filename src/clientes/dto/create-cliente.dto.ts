import { IsInt, IsString, IsNumber, IsNotEmpty, IsIn} from 'class-validator';

export class CreateClienteDto {

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  @IsNotEmpty()
  limite: number;

  @IsInt()
  @IsNotEmpty()
  id_endereco: number;


  @IsNotEmpty()
  @IsString()
  @IsIn(['bom', 'ruim', 'médio'], { message: 'O valor deve ser "bom", "ruim" ou "médio".' })
  status: string;
}
