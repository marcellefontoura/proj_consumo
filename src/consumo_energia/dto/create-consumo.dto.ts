import { IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateConsumoDto {
  @IsString()      usuarioId: string;
  @IsNumber()      kwh: number;
  @IsDateString()  dataLeitura: string;
}
