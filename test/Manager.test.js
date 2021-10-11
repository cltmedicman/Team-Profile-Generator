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
    expect(Jeff.id).tobe(101);
    expect(Jeff.email).tobe("Jeff@email.com");
    expect(Jeff.officeNumber).tobe(50);
})