import {Sequelize} from 'sequelize'

const sequelize = new Sequelize({
    host: process.env.NEXT_MYSQL_HOSTNAME,
    username: process.env.NEXT_MYSQL_USERNAME,
    password: process.env.NEXT_MYSQL_PASSWORD,
    database: process.env.NEXT_MYSQL_DATABASE,
    dialect: "mysql",
    dialectModule: require('mysql2'),
})

const init = () =>  {
    sequelize.sync().then(() => {
        require('@/app/api/modals/users')
        require('@/app/api/modals/images')
        require('@/app/api/modals/orders')
        console.log('Connection has been established successfully.');
    }).catch(error => {
        console.error('Unable to connect to the database:', error);
    })
    
}

export const db = {
    initialized: false,
    init
}

export default sequelize;
