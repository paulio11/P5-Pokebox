import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// Components
import CustomModal from "../CustomModal";

test("Button renders, modal is hidden", () => {
  render(
    <CustomModal buttonText="Test button" heading="Test heading">
      Children
    </CustomModal>
  );

  const button = screen.getByRole("button", { name: "Test button" });
  expect(button).toBeInTheDocument();

  const heading = screen.queryByText("Test heading");
  expect(heading).not.toBeInTheDocument();

  const children = screen.queryByText("Children");
  expect(children).not.toBeInTheDocument();

  const closeButton = screen.queryByText("Close");
  expect(closeButton).not.toBeInTheDocument();
});

test("Modal elements render when button is clicked", () => {
  render(
    <CustomModal buttonText="Test button" heading="Test heading">
      Children
    </CustomModal>
  );

  const button = screen.getByRole("button", { name: "Test button" });
  fireEvent.click(button);

  const heading = screen.getByText("Test heading");
  expect(heading).toBeInTheDocument();

  const children = screen.getByText("Children");
  expect(children).toBeInTheDocument();

  const closeButton = screen.getByText("Close");
  expect(closeButton).toBeInTheDocument();
});

test("Modal hides when close button is clicked", async () => {
  render(
    <CustomModal buttonText="Test button" heading="Test heading">
      Children
    </CustomModal>
  );

  const button = screen.getByRole("button", { name: "Test button" });
  fireEvent.click(button);

  const closeButton = screen.getByText("Close");
  fireEvent.click(closeButton);

  await waitFor(() => {
    const heading = screen.queryByText("Test heading");
    expect(heading).not.toBeInTheDocument();
  });

  await waitFor(() => {
    const children = screen.queryByText("Children");
    expect(children).not.toBeInTheDocument();
  });
});
