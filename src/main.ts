import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ① Habilita CORS para todas as origens e métodos
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // ② Inicia o servidor na porta definida ou 3000
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
