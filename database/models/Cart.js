module.exports = (sequelize,DataTypes) => {
    const Cart = sequelize.define("Cart",
    
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        state: {
            type: DataTypes.STRING
        },
        date: {
            type: DataTypes.DATE
        },
        user_id: {
            type: DataTypes.INTEGER
        },
        total: {
            type: DataTypes.INTEGER
        }
    },
    {
        tableName: "carts",
        timestamps: false
    });

Cart.associate = function(models) {
    Cart.belongsTo(models.User, {
        as: "users",
        foreignKey: "user_id"
    });

Cart.belongsToMany(models.Game, {
    as: "games",
    through: "cart_game",
    foreignKey: "cart_id",
    otherKey: "game_id",
    timestamps: false
});
}
return Cart;
}



