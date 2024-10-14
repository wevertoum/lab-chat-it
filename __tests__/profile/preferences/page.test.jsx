import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Preferences from "../../../src/app/profile/preferences/page";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "next-themes";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Preferences Page", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });
  });

  it("renders preference items", () => {
    render(
      <ThemeProvider enableSystem={true} attribute="class">
        <Preferences />
      </ThemeProvider>
    );

    const accountInfoItem = screen.getByText("Account Information");
    const passwordItem = screen.getByText("Password");
    const paymentMethodsItem = screen.getByText("Payment Methods");
    const inviteFriendsItem = screen.getByText("Invite Your Friends");
    const themeColourItem = screen.getByText("Theme Colour");

    expect(accountInfoItem).toBeInTheDocument();
    expect(passwordItem).toBeInTheDocument();
    expect(paymentMethodsItem).toBeInTheDocument();
    expect(inviteFriendsItem).toBeInTheDocument();
    expect(themeColourItem).toBeInTheDocument();
  });

  it("navigates to Account Information when clicked", () => {
    const { push } = useRouter();
    render(
      <ThemeProvider enableSystem={true} attribute="class">
        <Preferences />
      </ThemeProvider>
    );

    const accountInfoItem = screen.getByText("Account Information");
    accountInfoItem.click();

    expect(push).toHaveBeenCalledWith("/profile/preferences/edit-information");
  });

  it("navigates to Invite Friends when clicked", () => {
    const { push } = useRouter();
    render(
      <ThemeProvider enableSystem={true} attribute="class">
        <Preferences />
      </ThemeProvider>
    );

    const inviteFriendsItem = screen.getByText("Invite Your Friends");
    inviteFriendsItem.click();

    expect(push).toHaveBeenCalledWith("/profile/preferences/invite-friends");
  });
});
