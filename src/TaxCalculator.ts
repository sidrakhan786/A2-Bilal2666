export class TaxCalculator {
    public static getTax(salary: number): number {
        // if salary is more than 10,000, it is 10 % otherwise it is 5 percent
        if (salary > 10000)
            return salary * 0.1;
        else
            return salary * 0.05;
    }
}