const { test } = require("@jest/globals");
const Intern = require("../lib/Intern");

test('Test Intern Class', () => {
    const Jeff = new Intern("Jeff", 101, "Jeff@email.com", "UNCC");
    let boolean;
    if (typeof Jeff === "object") {
        boolean = true;
    } else {
        boolean = false;
    }

    expect(boolean).toBe(true);
    expect(Jeff.getRole()).toBe("👨‍🎓Intern");
    expect(Jeff.name).toBe('Jeff');
    expect(typeof Jeff.id).toBe('number');
    expect(Jeff.email).toBe("Jeff@email.com");
    expect(Jeff.school).toBe("UNCC");
})