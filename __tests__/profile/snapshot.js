import { render, screen, fireEvent } from "@testing-library/react";
import Profile from "../../src/app/profile/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Profile Page", () => {
  it("renders profile page unchanged", () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({ push }));

    render(<Profile />);

    const heading = screen.getByRole("heading", { name: /Profile page/i });
    expect(heading).toBeInTheDocument();

    const preferencesButton = screen.getByRole("button", {
      name: /go to preferences/i,
    });
    fireEvent.click(preferencesButton);
    expect(push).toHaveBeenCalledWith("/profile/preferences");

    const chatButton = screen.getByRole("button", { name: /Back to chat/i });
    fireEvent.click(chatButton);
    expect(push).toHaveBeenCalledWith("/chat");
  });
});
