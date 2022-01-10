import { Cake } from '../domain/Cake';
import { CakeToCreate } from '../domain/CakeToCreate';
import { CakeRepository } from '../domain/CakeRepository';

export class MariadbCakeRepository implements CakeRepository {
    private pool;

    constructor() {
        // TODO: extraer a un archivo de configuración
        const mariadb = require('mariadb');
        this.pool = mariadb.createPool({
            host: '127.0.0.1',
            user: 'root',
            password: 'root',
            database: 'cakes'
        });
    }

    async save(cakeToCreate: CakeToCreate): Promise<Cake> {
        // TODO: implementar con ORM
        const conn = await this.pool.getConnection();
        const query = await conn.query(`INSERT INTO cakes (name, img) VALUES ('${cakeToCreate.name}', '${cakeToCreate.img}');`);
        const cake = new Cake(query.insertId, cakeToCreate.name, cakeToCreate.img);
        conn.end();
        return cake;
    }

    async find(id: number): Promise<Cake> {
        // TODO: implementar
        throw new Error('Method not implemented.');
    }

    async update(cake: Cake): Promise<void> {
        const conn = await this.pool.getConnection();
        await conn.query(`UPDATE cakes SET cakes.name = '${cake.name}', cakes.img = '${cake.img}' WHERE cakes.id = ${cake.id};`);
        conn.end();
    }

    async delete(id: number): Promise<void> {
        // TODO: implementar
        throw new Error('Method not implemented.');
    }
}
