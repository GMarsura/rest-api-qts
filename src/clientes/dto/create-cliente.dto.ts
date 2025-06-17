import { IsInt, IsString, IsNumber, IsNotEmpty, IsOptional, Matches, Length } from 'class-validator';

export class CreateClienteDto {

  @IsString()
  @Matches(/^\d{11}$/, { message: 'O telefone deve conter exatamente 11 dígitos numéricos' })
  telefone: string;

  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsNumber()
  limite: number;

  @IsInt()
  id_endereco: number;

  @IsInt()
  id_status: number;
}
