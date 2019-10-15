// Test away!

import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

// snapshot test
test("should match snapshot", () => {
  expect(render(<Display />)).toMatchSnapshot();
});