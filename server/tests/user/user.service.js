const chai = require('chai');
const expect = chai.expect;
const agent = require('../auth/login.test')
var data;


suite('User', () => {
    test('getUserdata', done => {
        agent[0].get('/user')
            .end((err, res) => {
                data = res.body;
                expect(res).have.status(200)
                done(err)
            })
    })
})

// module.exports = agent.get('/user').end((err, res) => {
//     return res.body
// });