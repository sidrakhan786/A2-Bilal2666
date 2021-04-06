import { TaxCalculator } from "../TaxCalculator"
import { assert } from "chai";

describe("TaxCalculator tests", () => {
    it("should get tax for salary less than 10 thousand", () => {
        const tax = TaxCalculator.getTax(1000);
        assert.strictEqual(tax, 50);
    })
    it("should get tax for salary more than 10 thousand", () => {
        const tax = TaxCalculator.getTax(11000);
        assert.strictEqual(tax, 1100);
    })

})