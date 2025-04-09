import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(helmet());
    app.enableCors();

    const config = new DocumentBuilder()
        .setTitle('Chat AI')
        .setDescription('API Docs pour Chat AI')
        .setVersion('1.0')
        .addTag('AI')
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, documentFactory);

    await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
