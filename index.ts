class RegexHelper {
  text: string;
  private regexParts: string[];
  private flags: string;
  private minLength: number;
  private maxLength: number;

  constructor(text: string) {
    if (typeof text !== "string") {
      throw new Error("Input must be a string.");
    }
    this.text = text;
    this.regexParts = [];
    this.flags = "";
    this.minLength = 0;
    this.maxLength = Infinity;
  }

  //   Basic Patterns
  hasText() {
    this.regexParts.push("(?=.*[A-Za-z])");
    return this;
  }

  hasNumbers() {
    this.regexParts.push("(?=.*[0-9])");
    return this;
  }

  hasSpecialCharacter() {
    this.regexParts.push("(?=.*[!@#$%^&*])"); // Special characters to be included
    return this;
  }

  hasUpperCase() {
    this.regexParts.push("(?=.*[A-Z])");
    return this;
  }

  hasLowerCase() {
    this.regexParts.push("(?=.*[a-z])");
    return this;
  }

  //   Length constraint
  min(length: number) {
    this.minLength = length;
    return this;
  }

  max(length: number) {
    this.maxLength = length;
    return this;
  }

  // Flags
  caseInsensitive() {
    if (!this.flags.includes("i")) {
      this.flags += "i";
    }
    return this;
  }

  global() {
    if (!this.flags.includes("g")) {
      this.flags += "g";
    }
    return this;
  }

  multiline() {
    if (!this.flags.includes("m")) {
      this.flags += "m";
    }
    return this;
  }

  // Email and URL patterns
  isEmail() {
    // this.regexParts.push("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    // this.regexParts.push("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
    this.regexParts.push("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");

    return this;
  }

  isURL() {
    this.regexParts.push("^(https?|ftp):\\/\\/[^\\s/$.?#].[^\\s]*$");
    return this;
  }

  isPhoneNumber() {
    // Simple pattern for demonstration; can be customized for specific formats
    this.regexParts.push("^[+]?[0-9]{10,15}$");
    return this;
  }

  isPostalCode() {
    // Generic postal code pattern; can be customized per country
    this.regexParts.push("^[0-9]{5}(-[0-9]{4})?$");
    return this;
  }

  contains(substring: string) {
    this.regexParts.push(`(?=.*${substring})`);
    return this;
  }

  build(): string {
    return `^${this.regexParts.join("")}.{${this.minLength},${
      this.maxLength
    }}$`;
  }

  // Methods to expose regex pattern and flags
  getRegexPattern(): string {
    if (this.regexParts.length === 0) {
      throw new Error("No validation criteria specified.");
    }
    return `^${this.regexParts.join("")}.{${this.minLength},${
      this.maxLength
    }}$`;
  }

  getFlags(): string {
    return this.flags;
  }
}

// Execute validation
export function validate(regexHelper: RegexHelper): boolean | RegExpMatchArray {
  const pattern = regexHelper.getRegexPattern();
  const flags = regexHelper.getFlags();
  const regex = new RegExp(pattern, flags);

  return flags.includes("g")
    ? regexHelper.text.match(regex)!
    : regex.test(regexHelper.text);
}

export default function regex(text: string): RegexHelper {
  return new RegexHelper(text);
}
