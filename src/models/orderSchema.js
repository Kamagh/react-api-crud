const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
        text: {
            type: String,
            required: [true, 'Add some text...']
        },
        from: {
            type: String
        }

    }, {
        timestamp: true
    }
)

module.exports = mongoose.model('Order', orderSchema)

