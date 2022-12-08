import mongoose from 'mongoose';
import { mongoUrl } from './configConstant';

mongoose.connect(mongoUrl + '/Zenos');

const db = mongoose.connection;
db.on('error', () => {
	console.log('connect failed');
});

db.on('open', () => {
	console.log('connected');
});

module.exports = {};
