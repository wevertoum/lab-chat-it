import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../src/app/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  it("renders a heading", () => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    render(<Home />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
