const delay = require("./delay")

describe("delay", () => {
    test("корректно", async () => {
        const summ = await delay(()=>5+5, 1000);
        expect(summ).toBe(10);
    })
})