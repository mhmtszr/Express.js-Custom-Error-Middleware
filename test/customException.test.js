var app = require("../app");
const request = require("supertest")(app);

describe("CustomException", () => {
  it("Throws Custom Exception", async () => {
    const response = await request.post("/throwError");
    expect(response.body.message).toEqual("With reason: Example reason");
  });
});
