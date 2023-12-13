import regex, { validate as regexValidation } from ".";

const PassWord = "TheNameIsGifted123_!!";
const passwordValidation = regex(PassWord)
  .hasNumbers()
  .min(8)
  .hasSpecialCharacter()
  .max(30);

const email = "test@example.com";
const emailValidation = regex(email).isEmail();
console.log(
  regexValidation(passwordValidation),
  regexValidation(emailValidation)
);
