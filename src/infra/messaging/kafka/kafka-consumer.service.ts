import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['relaxing-jackass-9366-eu1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cmVsYXhpbmctamFja2Fzcy05MzY2JLoK1C5eFpiE9Ek5kJjHbOxbies341T8R_g',
          password:
            'szZ7ao5_n4YL3qczwIVNWSbvhtsBvxYTbxiWRHkjBY10-ipiTEsd8ZvuWV8UrUy4DZserQ==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
