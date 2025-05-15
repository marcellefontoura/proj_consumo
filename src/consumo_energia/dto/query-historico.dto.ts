import { IsDateString } from 'class-validator';

export class QueryHistoricoDto {
  @IsDateString() dataInicio: string;
  @IsDateString() dataFim: string;
}
