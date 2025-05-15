import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';  
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumoEnergiaModule } from './consumo_energia/consumo_energia.module'; 


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/consumoDB'), 
    ConsumoEnergiaModule,                                          
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
