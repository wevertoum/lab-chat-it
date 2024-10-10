import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Preferences from "../../../src/app/profile/preferences/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Preferences Page", () => {
  it("renders a heading", () => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    render(<Preferences />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
