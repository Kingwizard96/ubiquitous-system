const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    description: {
        type: String    
    },
    image: {
        type: String
    },
    quantity: {
        type: Number,
        required: 0,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    // add a design field to the product schema
    // enumerate available designs
    design: {
        name: String,
        image: String
    },
    // grinder color
    grinder:{
        color: [{ type:String}]
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
