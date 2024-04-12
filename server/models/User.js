const mongoose = require('mongoose');
    
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
        type: String,
        require: true,
        minlength: 8,
        match: [/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[-?:$]).{8,}/, 'Password must contain at least one uppercase letter, one lowercase letter, one symbol (-?:$), and one number']    },
    orders: [Order.schema]
});

userSchema.pre('save', async function(next) {
    if(this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return await bcrypt.compare(password, this.password)
};

const User = mongoose.model('User', userSchema);

module.exports = User;