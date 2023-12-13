import regex, { validate } from ".";

describe("RegexHelper Tests", () => {
  test("Validates a password correctly", () => {
    const password = "Password123!";
    const passwordValidation = regex(password)
      .hasNumbers()
      .min(8)
      .hasSpecialCharacter()
      .max(30);
    expect(validate(passwordValidation)).toBeTruthy();
  });

  test("Validates an email address correctly", () => {
    const email = "test@example.com";
    expect(validate(regex(email).isEmail())).toBeTruthy();
  });

  test("Throws error for non-string input", () => {
    // @ts-ignore
    expect(() => regex(123)).toThrow("Input must be a string.");
  });

  // [Add more tests for other methods and edge cases] -- Thanks 🚀🌱
});
