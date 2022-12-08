import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserType = {
	username: String,
	password: String,
	age: Number,
};

// user database
const UserModel = mongoose.model('users', new Schema(UserType));

export default UserModel;
