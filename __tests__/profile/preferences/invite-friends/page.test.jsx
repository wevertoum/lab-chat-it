import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import InviteFriends from "../../../../src/app/profile/preferences/invite-friends/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Invite Friends Page", () => {
  it("renders a heading", () => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    render(<InviteFriends />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
