import assert from 'assert';
import { AfterAll, BeforeAll, Given, Then } from 'cucumber';
import request from 'supertest';
import { CakesApi } from '../../../../src/app/CakesApi';

let _request: request.Test;
let application: CakesApi;
let _response: request.Response;

Given('I send a POST request to {string} with body:', (route: string, body: string) => {
    _request = request(application.httpServer).post(route).send(JSON.parse(body));
});

Then('the response status code should be {int}', async (status: number) => {
    _response = await _request.expect(status);
});

Then('the response should be empty', () => {
    assert.deepStrictEqual(_response.body, {});
});

BeforeAll(async () => {
    application = new CakesApi();
    await application.start();
});

AfterAll(async () => {
    await application.stop();
});
