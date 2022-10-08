import {Injectable} from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus() {
    return {status: "Working as expected!"};
  }
}
