import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import EditInformation from "../../../../src/app/profile/preferences/edit-information/page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Edit Information Page", () => {
  it("renders the Edit Information page", () => {
    render(<EditInformation />);

    expect(screen.getByText("Edit Information")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Full Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /save changes/i })
    ).toBeInTheDocument();
  });
});
