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
    expect(typeof Jeff.id).toBe('number');
    expect(Jeff.email).toBe("Jeff@email.com");
})