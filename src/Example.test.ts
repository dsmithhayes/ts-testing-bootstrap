import Example from '@example/Example';

describe("Test Examples", () => {
    it("should set my name to all caps", async () => {
        const e = new Example("dave");
        expect(e.getNameInAllCaps()).toBe("DAVE");
    })
})
