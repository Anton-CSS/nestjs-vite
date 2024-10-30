import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'node:process'

const start = async () => {
  const PORT = process.env.PORT ?? 4000
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.enableCors()
  await app.listen(PORT, () => `Server is starter on PORT = ${PORT}}`)
}

start()
