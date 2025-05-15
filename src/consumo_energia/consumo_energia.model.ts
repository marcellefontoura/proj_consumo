import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type ConsumoEnergiaDocument = ConsumoEnergia & Document;


@Schema({ timestamps: true })
export class ConsumoEnergia {
  
  @Prop({ required: true })
  usuarioId: string;   

  @Prop({ required: true })
  kwh: number;   

  @Prop({ required: true })
  dataLeitura: Date;  
}

export const ConsumoEnergiaSchema = SchemaFactory.createForClass(ConsumoEnergia);
