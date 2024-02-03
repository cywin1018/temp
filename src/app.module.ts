import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { CatsModule } from './cats/cats.module';
import { NetworkModule } from './network/network.module';

@Module({
  imports: [DatabaseModule, CatsModule, NetworkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
