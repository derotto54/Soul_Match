const User = require('./User');
const Homebody = require('./Homebody');
const Extrovert = require('./Extrovert');

User.hasOne(Homebody, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

})

User.hasOne(Extrovert, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'

})



module.exports = { User, Homebody, Extrovert };


