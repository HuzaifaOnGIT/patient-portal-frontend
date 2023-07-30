import React from "react";
import { render, screen } from "@testing-library/react";
import LandingSection from "./LandingSection";
import "@testing-library/jest-dom/extend-expect";

test("renders landing section container", () => {
  render(<LandingSection />);
  const landingSectionContainer = screen.getByTestId(
    "landing-section-container"
  );
  expect(landingSectionContainer).toBeInTheDocument();
});

test("validates input for alphanumeric value for desktop", () => {
  render(<LandingSection />);
  const input = screen.getByTestId("text-input-desktop");
  expect(input).toBeInTheDocument();
});

test("validates input for alphanumeric value for mobile", () => {
  render(<LandingSection />);
  const input = screen.getByTestId("text-input-mobile");
  expect(input).toBeInTheDocument();
});

test("handles click event on Get OTP button", () => {
  render(<LandingSection />);
  const getOTPButton = screen.getAllByTestId("custom-btn");
  expect(getOTPButton).toHaveLength(2);
});
