import { render, screen, fireEvent } from "@testing-library/react";
import Preferences from "../../../src/app/profile/preferences/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Preferences Page", () => {
  it("renders preferences page unchanged", () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({ push }));

    render(<Preferences />);

    const heading = screen.getByRole("heading", { name: /Preferences/i });
    expect(heading).toBeInTheDocument();

    const editButton = screen.getByRole("button", {
      name: /go to edit-information page/i,
    });
    fireEvent.click(editButton);
    expect(push).toHaveBeenCalledWith("/profile/preferences/edit-information");

    const inviteButton = screen.getByRole("button", {
      name: /go to invite-friends page/i,
    });
    fireEvent.click(inviteButton);
    expect(push).toHaveBeenCalledWith("/profile/preferences/invite-friends");

    const backButton = screen.getByRole("button", { name: /back to profile/i });
    fireEvent.click(backButton);
    expect(push).toHaveBeenCalledWith("/profile");
  });
});
