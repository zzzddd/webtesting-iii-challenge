// Test away
import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";
import Display from "../display/Display";

// snapshot test
test("should match snapshot", () => {
  expect(render(<Dashboard />)).toMatchSnapshot();
});



// shows the controls and display
test('Dashboard shows controls', () => {
  render(<Controls />);
});

test('Dashboard shows display', () => {
  render(<Display />);
});

