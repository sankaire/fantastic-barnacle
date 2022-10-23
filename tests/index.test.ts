import request from "supertest";
import app from "../server/app";

describe("Home Api", () => {
  test("Validate response", async () => {
    let response = request(app).get("/api");
    expect((await response).statusCode).toBe(200);
  });
});
