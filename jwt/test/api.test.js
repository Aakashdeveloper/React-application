let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Rest Api',() => {
    it('Should do health check',(done) => {
        chai.request(`https://attainu-code.herokuapp.com/`)
        .get('/')
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err;
        })
    })
})