import { add } from "@api/add";

test("test 1+1", () => {
  expect(add({ a: 1, b: 1 })).toEqual({ result: 2 });
});
