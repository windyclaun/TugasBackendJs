import { Sequelize } from 'sequelize';

const db = new Sequelize('notesapi', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;