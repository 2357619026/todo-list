export const username = 'zenos_user';
export const password = 'Zenoschen%40%40%401998Zenos';
export const mongoUrl = `mongodb://${username}:${password}@43.142.43.76:36177`;
export const mongoStoreConfig = {
	mongoUrl: 'mongodb://43.142.43.76:36177/zenos_session',
	ttl: 1000 * 60 * 5, // 5mins
};
