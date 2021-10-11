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
    expect(typeof Jeff.id).toBe('number');
    expect(Jeff.email).toBe("Jeff@email.com");
    expect(Jeff.github).toBe("Jeffgithub");
})