const { test } = require("@jest/globals");
const Manager = require("../lib/Manager");

test('Test Manager Class', () => {
    const Jeff = new Manager("Jeff", 101, "Jeff@email.com", 50);
    let boolean;
    if (typeof Jeff === "object") {
        boolean = true;
    } else {
        boolean = false;
    }

    expect(boolean).toBe(true);
    expect(Jeff.getRole()).toBe("☕Manager");
    expect(Jeff.name).toBe('Jeff');
    expect(typeof Jeff.id).toBe('number');
    expect(Jeff.email).toBe("Jeff@email.com");
    expect(typeof Jeff.officeNumber).toBe('number');
})