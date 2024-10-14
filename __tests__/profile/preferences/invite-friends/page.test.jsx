import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InviteFriends from "../../../../src/app/profile/preferences/invite-friends/page";
import { ThemeProvider } from "next-themes";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Invite Friends Page", () => {
  beforeEach(() => {
    render(
      <ThemeProvider enableSystem={true} attribute="class">
        <InviteFriends />
      </ThemeProvider>
    );
  });

  it("renders the Invite Friends page correctly", () => {
    expect(screen.getByText("Invite Friends")).toBeInTheDocument();

    expect(screen.getByText("Refeer A friend")).toBeInTheDocument();
    expect(
      screen.getByText("Share Your Promo Code & Get $3 For Each Friend")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /copy invite code/i })
    ).toBeInTheDocument();
  });
});
