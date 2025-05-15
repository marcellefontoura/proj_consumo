import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConsumoEnergia, ConsumoEnergiaDocument } from './consumo_energia.model';
import { CreateConsumoDto } from './dto/create-consumo.dto';
import { QueryHistoricoDto } from './dto/query-historico.dto';

@Injectable()
export class ConsumoEnergiaService {
  constructor(
    @InjectModel(ConsumoEnergia.name)
    private consumoModel: Model<ConsumoEnergiaDocument>,
  ) {}


  async registrar(dto: CreateConsumoDto) {
    const registro = new this.consumoModel({
      usuarioId: dto.usuarioId,
      kwh: dto.kwh,
      dataLeitura: new Date(dto.dataLeitura),
    });
    return registro.save();
  }


  async historico(usuarioId: string, query: QueryHistoricoDto) {
    return this.consumoModel
      .find({
        usuarioId,
        dataLeitura: {
          $gte: new Date(query.dataInicio),
          $lte: new Date(query.dataFim),
        },
      })
      .sort('dataLeitura')
      .exec();
  }


  async gerarAlerta(usuarioId: string) {
    const ultimos = await this.consumoModel
      .find({ usuarioId })
      .sort('-dataLeitura')
      .limit(2)
      .exec();

    if (ultimos.length < 2) {
      throw new BadRequestException('São necessários 2 meses de registros');
    }

    const [atual, anterior] = ultimos;
    return {
      excedeu: atual.kwh > anterior.kwh,
      consumoAtual: atual.kwh,
      consumoAnterior: anterior.kwh,
    };
  }
}
