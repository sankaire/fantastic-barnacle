const chai = require("chai")
const chaihttp = require("chai-http")
const app = require("../index")

// assertation style
chai.should()
chai.use(chaihttp)

// home api tests
describe("Home api", () => {
  // get home route
  describe("get /api/v1/home", () => {
    it("should render welcome to api version one", done => {
      chai
        .request(app)
        .get("/api/v1/home")
        .end((err, response) => {
          response.should.have.status(200)
          response.body.should.a("object")
          done()
        })
    })
  })
})

export {}
