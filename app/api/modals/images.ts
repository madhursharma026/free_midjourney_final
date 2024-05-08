import sequelize from '@/config'
import { DataTypes } from 'sequelize'

const Image = sequelize.define('image', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id"
        }
    },
    img_url: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
    },
    prompt: {
        type: DataTypes.TEXT('medium'),
        allowNull: false,
    },
})

export default Image;