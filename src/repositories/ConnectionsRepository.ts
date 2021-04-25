import { EntityRepository, Repository } from "typeorm";

import { Connection } from "../entities/Connetion";

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {}

export { ConnectionsRepository };
