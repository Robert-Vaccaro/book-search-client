const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');

describe('GET /books', () => {
    it('should return an array of books', () => {
        return request(app)
          .get('/books')
          .expect(200)
          .expect('Content-Type', /json/)
          .then(res => {
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf.at.least(1);
            const book = res.body[0];
            expect(book).to.include.all.keys('bestsellers_date', 'author', 'description', 'title');
        })
    })
});