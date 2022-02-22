import { Core } from "../Core";

describe("Core", () => {
    it("initializes the state correctly", () => {
        const core = new Core("name");

        expect(core.name).toEqual("name");
    });
});