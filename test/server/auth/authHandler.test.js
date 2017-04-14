jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
require('dotenv').config();
import request from 'supertest';
import { app } from '../../../server/server.js';
let db = null;

jest.mock('../../../server/calling/config.js');

const resetDb = () => {
	return db.none('TRUNCATE users RESTART IDENTITY CASCADE');
}

describe('authHandler tests', () => {
	beforeAll(() => {
	  // if (process.env.IS_ON === 'development') {
	    // process.env.DATABASE_URL = 'postgres://@localhost:5432/reflectivetest';
	  // }		
		const dbConfig = require('../../../db/config.js');
		db = dbConfig.db;
		return dbConfig.loadDb(db);
	});

	afterAll(() => {
		// process.env.DATABASE_URL = 'postgres://@localhost:5432/reflective';
	});


	test('should handle POST /signup route', (done) => {
		return resetDb().then(() => {
			return request(app).post('/api/auth/signup')
				.send({
					email: 'newUser@mail.com',
					firstName: 'New user',
					lastName: 'To be deleted',
					password: 'password',
					phone: '7582931276'
				})
				.expect(200)
		})
			.then((res) => {
				expect(res.body.user).toBeDefined();
				expect(res.body.token).toBeDefined();
				done();
			});
	});

	test('should send an error message if email exists in the DB', (done) => {
		return resetDb().then(() => {
			return request(app).post('/api/auth/signup')
				.send({
					email: 'newUser@mail.com',
					firstName: 'New user',
					lastName: 'To be deleted',
					password: 'password',
					phone: '7582931276'
				})
		})
			.then(() => {
				return request(app).post('/api/auth/signup')
					.send({
						email: 'newUser@mail.com',
						firstName: 'New user',
						lastName: 'To be deleted',
						password: 'password',
						phone: '7582931276'
					})
					.expect(400)
			})
			.then(res => {
				expect(res.error.text).toBeDefined();
				done();
			});
	});

	test('should handle POST /login route', (done) => {
		return resetDb().then(() => {
			return request(app).post('/api/auth/signup')
				.send({
					email: 'newUser@mail.com',
					firstName: 'New user',
					lastName: 'To be deleted',
					password: 'password',
					phone: '7582931276'
				});
		})
		.then(() => {
			return request(app).post('/api/auth/login')
			.send({
				email: 'newUser@mail.com',
				password: 'password'
			})
			.expect(200)
		})
		.then(res => {
			expect(res.body.user).toBeDefined();
			expect(res.body.token).toBeDefined();
			done();
		});
	});

	test('should send an error message if login fails.', (done) => {
		return request(app).post('/api/auth/login')
			.send({
				email: 'newUser@mail.com',
				password: 'wrongpassword'
			})
			.expect(401)
			.then(res => {
				expect(res.error.text).toBeDefined();
				done();
			});
	});

	/**
	 * 3rd party API call route, not testing for now
	 */
	// test('should handle POST /verify route', () => {
	// 	const Call = require('../../../server/calling/config.js');
	// 	Call.verify = jest.fn(() => {
	// 		return Promise.resolve('value');
	// 	});
	// 	return request(app).post('/api/auth/verify')
	// 		.send({
	// 			verificationCode: '0562'
	// 		})
	// 		.expect(200)
	// });	

});