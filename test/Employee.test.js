const { test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('Test Employee Class', () => {
    const Jeff = new Employee("Jeff", 101, "Jeff@email.com");
    let boolean;
    if (typeof Jeff === "object") {
        boolean = true;
    } else {
        boolean = false;
    }

    expect(boolean).toBe(true);
    expect(Jeff.getRole()).toBe("Employee");
    expect(Jeff.name).toBe('Jeff');
    expect(Jeff.id).tobe(101);
    expect(Jeff.email).tobe("Jeff@email.com");
})