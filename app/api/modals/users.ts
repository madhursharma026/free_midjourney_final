import sequelize from '@/config'
import { DataTypes } from 'sequelize'

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    credits: {
        type: DataTypes.INTEGER,
        defaultValue: 10
    },
    is_premium: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    is_google_user: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
})

export default User