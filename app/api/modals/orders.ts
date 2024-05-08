import sequelize from '@/config'
import { DataTypes } from 'sequelize'

const Order = sequelize.define('order', {
    id: {
        type: DataTypes.STRING(255),
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    product_id: {
        type: DataTypes.ENUM(),
        allowNull: false,
        values: [process.env.NEXT_PUBLIC_PRODUCT_ONE_ID, process.env.NEXT_PUBLIC_PRODUCT_TWO_ID, process.env.NEXT_PUBLIC_PRODUCT_CUSTOM_ID]
    },
    status: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    reference_id: {
        type: DataTypes.STRING(255),
    },
    amount: {
        type: DataTypes.STRING(255),
    },
    currency_code: {
        type: DataTypes.STRING(255),
    },
    payee_email: {
        type: DataTypes.STRING(255),
    },
    payee_merchant_id: {
        type: DataTypes.STRING(255),
    },
    order_create_time: {
        type: DataTypes.STRING(255),
    },
    credits: {
        type: DataTypes.INTEGER,
    },
})

export default Order