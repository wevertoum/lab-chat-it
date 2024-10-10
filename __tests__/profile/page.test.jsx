import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Profile from "../../src/app/profile/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Profile Page", () => {
  it("renders a heading", () => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    render(<Profile />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
