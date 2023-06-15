import React from "react";
import { waitFor, render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
// Components
import NavBar from "../NavBar";
// Context Providers
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import { CurrentNotificationProvider } from "../../contexts/NotificationContext";

test("Renders logged out user links", () => {
  render(
    <Router>
      <CurrentNotificationProvider>
        <NavBar />
      </CurrentNotificationProvider>
    </Router>
  );

  const logInLink = screen.getByRole("link", { name: "Log in" });
  const registerLink = screen.getByRole("link", { name: "Register" });

  expect(logInLink).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});

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

  await waitFor(() => {
    const newPostLink = screen.getByRole("link", { name: "New Diary Entry" });
    const logOutLink = screen.getByRole("link", { name: "Log out" });
    const userProfileLink = screen.getByRole("link", { name: "testuser" });
    const settingsLink = screen.getByRole("link", { name: "Settings" });

    expect(newPostLink).toBeInTheDocument();
    expect(logOutLink).toBeInTheDocument();
    expect(userProfileLink).toHaveAttribute("href", "/trainer/1");
    expect(settingsLink).toBeInTheDocument();
  });
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

  await waitFor(() => {
    const logOutLink = screen.getByRole("link", { name: "Log out" });
    fireEvent.click(logOutLink);
  });

  await waitFor(() => {
    const logInLink = screen.getByRole("link", { name: "Log in" });
    const registerLink = screen.getByRole("link", { name: "Register" });

    expect(logInLink).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
  });
});
