import { IsString, IsNotEmpty, IsNumber, Length } from 'class-validator';

export class CreateEnderecoDto {
  @IsString()
  @IsNotEmpty()
  logradouro: string;

  @IsString()
  @Length(8, 8, { message: 'CEP deve ter exatamente 8 caracteres' })
  cep: string;

  @IsNumber()
  numero: number;

  @IsString()
  @IsNotEmpty()
  bairro: string;

  @IsString()
  @IsNotEmpty()
  cidade: string;
}
