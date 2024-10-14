import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Profile from "../../src/app/profile/page";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "next-themes";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Profile Page", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });
  });

  it("renders user name and email", () => {
    render(
      <ThemeProvider enableSystem={true} attribute="class">
        <Profile />
      </ThemeProvider>
    );

    const userName = screen.getByText("Tom Hillson");
    const userEmail = screen.getByText("Tomhill@mail.com");

    expect(userName).toBeInTheDocument();
    expect(userEmail).toBeInTheDocument();
  });

  it("renders profile items", () => {
    render(
      <ThemeProvider enableSystem={true} attribute="class">
        <Profile />
      </ThemeProvider>
    );

    const preferencesItem = screen.getByText("Preferences");
    const securityItem = screen.getByText("Account Security");
    const supportItem = screen.getByText("Customer Support");
    const logoutItem = screen.getByText("Logout");

    expect(preferencesItem).toBeInTheDocument();
    expect(securityItem).toBeInTheDocument();
    expect(supportItem).toBeInTheDocument();
    expect(logoutItem).toBeInTheDocument();
  });

  it("navigates to Preferences when clicked", () => {
    const { push } = useRouter();
    render(
      <ThemeProvider enableSystem={true} attribute="class">
        <Profile />
      </ThemeProvider>
    );

    const preferencesItem = screen.getByText("Preferences");
    preferencesItem.click();

    expect(push).toHaveBeenCalledWith("/profile/preferences");
  });
});
