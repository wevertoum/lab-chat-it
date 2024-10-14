import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Chat from "@/app/chat/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Chat Page", () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });

    localStorage.clear();
  });

  it("renders the Chat page correctly", () => {
    render(<Chat />);

    expect(screen.getByText("BrainBox")).toBeInTheDocument();
    expect(
      screen.getByText("Remembers what user said earlier in the conversation")
    ).toBeInTheDocument();
  });
});
