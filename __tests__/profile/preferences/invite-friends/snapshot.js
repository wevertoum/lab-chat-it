import { render, screen, fireEvent } from "@testing-library/react";
import InviteFriends from "../../../../src/app/profile/preferences/invite-friends/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Invite Friends Page", () => {
  it("renders invite friends page unchanged", () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({ push }));

    render(<InviteFriends />);

    const heading = screen.getByRole("heading", { name: /Invite Friends/i });
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /back to preferences/i });
    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith("/profile/preferences");
  });
});
