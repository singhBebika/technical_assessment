import {removeFalsyKeys} from "@src/hooks/object";
import {describe, it, expect} from "vitest";

describe("removeFalsyKeys", () => {
  it("should remove keys with falsy values", () => {
    const input = {
      a: 1,
      b: false,
      c: "",
      d: null,
      e: undefined,
      f: 0,
      g: "valid",
    };
    const expectedOutput = {
      a: 1,
      g: "valid",
    };

    const result = removeFalsyKeys(input);

    expect(result).toEqual(expectedOutput);
  });

  it("should return an empty object when all values are falsy", () => {
    const input = {
      a: false,
      b: "",
      c: null,
      d: undefined,
      e: 0,
    };
    const expectedOutput = {};

    const result = removeFalsyKeys(input);

    expect(result).toEqual(expectedOutput);
  });

  it("should return the same object if no values are falsy", () => {
    const input = {
      a: 1,
      b: "test",
      c: true,
    };
    const expectedOutput = {...input};

    const result = removeFalsyKeys(input);

    expect(result).toEqual(expectedOutput);
  });

  it("should work with nested objects (only removes top-level keys)", () => {
    const input = {
      a: 1,
      b: false,
      c: {
        nested: "value",
      },
    };
    const expectedOutput = {
      a: 1,
      c: {
        nested: "value",
      },
    };

    const result = removeFalsyKeys(input);
    expect(result).toEqual(expectedOutput);
  });
});
