// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Dashboard from "./Dashboard";
import Controls from "./Controls";
import Display from "../display/Display";

// provide buttons to toggle the closed and locked states
test('Controls Component provides buttons to toggle "closed" and "locked" states', () => {
  const { getAllByText } = render(<Controls />);
  getAllByRole('button');
});
