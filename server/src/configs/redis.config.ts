import redis from "redis";
import * as dotenv from "dotenv";

dotenv.config();
const REDIS_PORT = process.env.REDIS_PORT;

// Only create client if not in test environment
let redisClient: any = null;

// Jest environment is set to * test * automatically 
if (process.env.NODE_ENV !== 'test') {
    redisClient = redis.createClient({
        socket: {
            host: 'redis',
            port: REDIS_PORT ? parseInt(REDIS_PORT) : 6379,
        },
        username: 'default',
        password: process.env.REDIS_PASSWORD
    });

    redisClient.on('connect', () => console.log('Connected to Redis'));
    redisClient.on('error', (err: any) => console.log(`Redis error: ${err}`));
}

export { redisClient };