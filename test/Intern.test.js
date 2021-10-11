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
    expect(Jeff.id).tobe(101);
    expect(Jeff.email).tobe("Jeff@email.com");
    expect(Jeff.school).tobe("UNCC");
})