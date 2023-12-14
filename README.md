# Regex Lite

## Description

`regex-lite` is a TypeScript utility library designed to simplify the creation and validation of regular expressions. This library provides a fluent, chainable interface to build complex regular expressions with ease and readability.

## Features

- Fluent and chainable API
- Easy construction of complex regex patterns
- Built-in validators for common use-cases like email, URL, phone numbers, etc.
- Customizable and extendable
- Fully typed with TypeScript for better development experience

## Installation

```bash
bun i regex-lite
```

or

```bash
npm install regex-lite
```

or

```bash
yarn add regex-lite
```

## Usage

Here's a quick example to get you started:

```typescript
import regex, { validate } from "regex-lite";

const pattern = regex("Your test string")
  .hasText()
  .hasNumbers()
  .hasSpecialCharacter()
  .min(8)
  .max(20);

console.log(validate(pattern)); // true or false based on the validation
```

## API Reference

[Provide detailed API documentation or link to external documentation.]

### Example Methods

- `hasText()`: Ensures the string contains text (a-z, A-Z).
- `hasNumbers()`: Ensures the string contains numbers.
- `hasSpecialCharacter()`: Ensures the string contains special characters.
- `min(length: number)`: Sets the minimum length of the string.
- `max(length: number)`: Sets the maximum length of the string.
- `validate()`: Executes the validation and returns a boolean result.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Gift Opia - [gkenny896@gmail.com](mailto:gkenny896@gmail.com)

Twitter - [@theNameIsGiFTED](http://twitter.com/theNameIsGiFTED)

Project Link: [https://github.com/Gift-Stack/regex-lite](https://github.com/Gift-Stack/regex-lite)

---

### Notes:

1. **Customization**: Modify the sections according to your project's specifics.
2. **API Reference**: If your library has more methods or detailed configurations, consider creating a separate documentation file or section.
3. **License and Contact**: Replace with your actual license and contact information.
4. **Engagement**: Encourage users to star, fork, or contribute to the project.

This `README.md` template provides a solid foundation for your `regex-lite` project, ensuring that users and potential contributors have all the information they need at a glance.
