const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test('Test Engineer Class', () => {
    const Jeff = new Engineer("Jeff", 101, "Jeff@email.com", "Jeffgithub");
    let boolean;
    if (typeof Jeff === "object") {
        boolean = true;
    } else {
        boolean = false;
    }

    expect(boolean).toBe(true);
    expect(Jeff.getRole()).toBe("👓Engineer");
    expect(Jeff.name).toBe('Jeff');
    expect(Jeff.id).tobe(101);
    expect(Jeff.email).tobe("Jeff@email.com");
    expect(Jeff.github).tobe("Jeffgithub");
})