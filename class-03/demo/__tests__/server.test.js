'use strict';

const server = require('../server.js');
const supertest = require('supertest');
const mockServer = supertest(server.app);

describe('Testing Server Thing API', ()=> {
    it('be able to POST a new thing', async ()=> {
        let response = await mockServer.post('/thing').send({
            name: "Ghofran",
            level: 8888
        });
        expect(response.status).toEqual(201);
        expect(response.body.record.name).toEqual("Ghofran");
        expect(response.body.record.level).toEqual(8888);
    });
});