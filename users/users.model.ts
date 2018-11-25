import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

export const UserModel = mongoose.model('User', userSchema);