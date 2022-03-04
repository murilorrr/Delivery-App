const chai = require("chai");
const shell = require("shelljs");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../../api/app");

const { expect } = chai;

const adminUser = {
  email: "adm@deliveryapp.com",
  password: "--adm2@21!!--",
};

describe("Get All Products - Sua aplicação deve ter o endpoint GET `/customer/products`", () => {
  before(() => {
    shell.exec(
      "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all"
    );
  });

  describe("Caso de sucesso", () => {
    let token;

    before((done) => {
      chai
        .request(server)
        .post("/login")
        .send(adminUser)
        .end((err, res) => {
          if (err) done(err);
          token = res.body.token;
          done();
        });
    });

    it("recebe um array de todas os produtos", (done) => {
      chai
        .request(server)
        .get("/customer/products")
        .set("authorization", token)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(200);
          expect(res.body).to.be.a("array");
          res.body.map((obj) => expect(obj[0]).to.not.be.null);
          res.body.map((obj) =>
            expect(obj).have.all.keys("id", "name", "price", "url_image")
          );
          done();
        });
    });

    it("recebe um array vazio, caso a pessoa ainda não tenha produtos", (done) => {
      shell.exec(
        "npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate"
      );

      chai
        .request(server)
        .get("/customer/products")
        .set("authorization", token)
        .end((err, res) => {
          if (err) done(err);
          expect(res.status).to.be.equal(200);
          expect(res.body).to.be.a("array");
          expect(res.body).to.be.length(0);
          done();
        });
    });
  });
});
