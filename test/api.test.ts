import request from "supertest";
import app from "../src/app";

describe("GET /api/recipes", () => {
  it("should return 200 OK", () => {
    return request(app)
      .get("/api/recipes")
      .expect(200);
  });
});
