import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../../src/app/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  it("renders homepage unchanged", () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({ push }));

    render(<Home />);

    const heading = screen.getByRole("heading", { name: /On-Boarding 01/i });
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /chat page/i });
    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith("/chat");
  });
});
