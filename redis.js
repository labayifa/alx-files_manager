import { createClient } from 'redis';

export class RedisClient{

  constructor() {
    this.client = createClient();
    this.client.on('error', err => console.log('Redis Client Error', err));
  }

  isAlive (){
    //if (this.client.is)
  }
}
