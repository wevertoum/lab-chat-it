import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import EditInformation from "../../../../src/app/profile/preferences/edit-information/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Edit Information Page", () => {
  it("renders a heading", () => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    render(<EditInformation />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
