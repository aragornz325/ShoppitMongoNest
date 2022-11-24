import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'welcome to shoppit_alt_mongo';
  }
}
