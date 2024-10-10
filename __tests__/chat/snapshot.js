import { render, screen, fireEvent } from "@testing-library/react";
import Chat from "../../src/app/chat/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Chat Page", () => {
  it("renders chat page unchanged", () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({ push }));

    render(<Chat />);

    const heading = screen.getByRole("heading", { name: /Chat page/i });
    expect(heading).toBeInTheDocument();

    const homeButton = screen.getByRole("button", { name: /Go to home/i });
    fireEvent.click(homeButton);
    expect(push).toHaveBeenCalledWith("/");

    const profileButton = screen.getByRole("button", {
      name: /Go to profile/i,
    });
    fireEvent.click(profileButton);
    expect(push).toHaveBeenCalledWith("/profile");
  });
});
