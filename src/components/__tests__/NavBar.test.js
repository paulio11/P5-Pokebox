import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
// Components
import NavBar from "../NavBar";
// Context Providers
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import { CurrentNotificationProvider } from "../../contexts/NotificationContext";

test("Renders logged in user links", async () => {
  render(
    <Router>
      <CurrentNotificationProvider>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </CurrentNotificationProvider>
    </Router>
  );

  const newPostLink = await screen.findByRole("link", {
    name: "New Diary Entry",
  });
  expect(newPostLink).toBeInTheDocument();

  const logOutLink = await screen.findByRole("link", { name: "Log out" });
  expect(logOutLink).toBeInTheDocument();

  const userProfileLink = await screen.findByRole("link", { name: "testuser" });
  expect(userProfileLink).toHaveAttribute("href", "/trainer/1");

  const settingsLink = await screen.findByRole("link", { name: "Settings" });
  expect(settingsLink).toBeInTheDocument();
});

test("Renders 'Log in' and 'Register' after clicking 'Log out'", async () => {
  render(
    <Router>
      <CurrentNotificationProvider>
        <CurrentUserProvider>
          <NavBar />
        </CurrentUserProvider>
      </CurrentNotificationProvider>
    </Router>
  );

  const logOutLink = await screen.findByRole("link", { name: "Log out" });
  fireEvent.click(logOutLink);

  const logInLink = await screen.findByRole("link", { name: "Log in" });
  expect(logInLink).toBeInTheDocument();

  const registerLink = await screen.findByRole("link", { name: "Register" });
  expect(registerLink).toBeInTheDocument();
});
