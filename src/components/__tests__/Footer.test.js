import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

test("Renders", () => {
  render(<Footer />);

  const footer = screen.getByText("Pokébox by Paul Young");
  expect(footer).toBeInTheDocument();
});
