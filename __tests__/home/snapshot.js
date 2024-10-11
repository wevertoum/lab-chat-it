import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/navigation";
import Home from "../../src/app/page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  it("renders homepage unchanged", () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({ push }));

    const { asFragment } = render(<Home />);

    expect(asFragment()).toMatchSnapshot();

    const heading = screen.getByRole("heading", {
      name: /Unlock the Power Of Future AI/i,
    });
    expect(heading).toBeInTheDocument();

    const skipButton = screen.getByRole("button", { name: /skip/i });
    fireEvent.click(skipButton);

    expect(push).toHaveBeenCalledWith("/chat");
  });
});
