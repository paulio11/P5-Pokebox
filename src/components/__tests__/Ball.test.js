import { render, screen } from "@testing-library/react";
// Components
import Ball from "../Ball";

test("Returns image", () => {
  render(<Ball />);

  const ballImage = screen.getByAltText("ball");
  expect(ballImage).toBeInTheDocument();
});

test("Returns poké ball", () => {
  render(<Ball size={250} />);

  const ballImage = screen.getByAltText("ball");
  expect(ballImage).toHaveAttribute("src", "pokeball.webp");
});

test("Returns great ball", () => {
  render(<Ball size={500} />);

  const ballImage = screen.getByAltText("ball");
  expect(ballImage).toHaveAttribute("src", "greatball.webp");
});

test("Returns ultra ball", () => {
  render(<Ball size={750} />);

  const ballImage = screen.getByAltText("ball");
  expect(ballImage).toHaveAttribute("src", "ultraball.webp");
});

test("Returns master ball", () => {
  render(<Ball size={1010} />);

  const ballImage = screen.getByAltText("ball");
  expect(ballImage).toHaveAttribute("src", "masterball.webp");
});
