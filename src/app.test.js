const app= require ("./app");
const supertest = require ("supertest");
const request = supertest(app)



describe ("/testNode endpoint", () => {
    it("should return a particular response", async() => {
        const response = await request.get("/testNode")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Yes the testNode endpoint worked");
    });

})