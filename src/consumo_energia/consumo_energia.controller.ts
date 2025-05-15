import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { ConsumoEnergiaService } from './consumo_energia.service';
import { CreateConsumoDto } from './dto/create-consumo.dto';
import { QueryHistoricoDto } from './dto/query-historico.dto';

@Controller('consumo')
export class ConsumoEnergiaController {
  constructor(private readonly service: ConsumoEnergiaService) {}


  @Post()
  registrar(@Body() dto: CreateConsumoDto) {
    return this.service.registrar(dto);
  }


  @Get('historico/:usuarioId')
  historico(
    @Param('usuarioId') usuarioId: string,
    @Query() query: QueryHistoricoDto,
  ) {
    return this.service.historico(usuarioId, query);
  }


  @Get('alerta/:usuarioId')
  alerta(@Param('usuarioId') usuarioId: string) {
    return this.service.gerarAlerta(usuarioId);
  }
}
