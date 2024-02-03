import { Injectable } from '@nestjs/common';
import { CreateNetworkDto } from './dto/create-network.dto';
import { UpdateNetworkDto } from './dto/update-network.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class NetworkService {
  constructor(private readonly httpService: HttpService) {
  }

  async getWeather() {
    return this.httpService.axiosRef
      .get(
        `https://digi-api.com/api/v1/digimon/289`,
        {
          headers:{
            
          }
        }
      )
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(
          err?.message + ': ' + JSON.stringify(err?.response?.data),
        );
      });
  }
}
