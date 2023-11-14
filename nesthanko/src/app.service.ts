import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPrivate(): string {
    return 'This is a private resource. Welcome to Hanko';
  }

  getPublic(): string {
    return 'This is a public resource. Welcome to Hanko';
  }
}
