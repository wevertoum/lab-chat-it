import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../../src/app/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Home Page", () => {
  const push = jest.fn();

  beforeEach(() => {
    useRouter.mockImplementation(() => ({ push }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the PageCarousel component with the correct data", () => {
    render(<Home />);

    const title = screen.getByRole("heading", {
      name: /Unlock the Power Of Future AI/i,
    });
    expect(title).toBeInTheDocument();

    const description = screen.getByText(
      /Chat with the smartest AI Future Experience power of AI with us/i
    );
    expect(description).toBeInTheDocument();
  });

  it("navigates to the chat page when clicking on Skip button", () => {
    render(<Home />);

    const skipButton = screen.getByRole("button", { name: /skip/i });
    expect(skipButton).toBeInTheDocument();

    fireEvent.click(skipButton);

    expect(push).toHaveBeenCalledWith("/chat");
  });

  it("navigates between items in the carousel", () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({ push }));

    render(<Home />);

    const rightArrowButton = screen.getByLabelText(/right arrow/i);
    const leftArrowButton = screen.getByLabelText(/left arrow/i);

    expect(
      screen.getByRole("heading", { name: /Unlock the Power Of Future AI/i })
    ).toBeInTheDocument();

    fireEvent.click(rightArrowButton);

    expect(
      screen.getByRole("heading", { name: /2 Unlock the Power Of Future AI/i })
    ).toBeInTheDocument();

    fireEvent.click(leftArrowButton);

    expect(
      screen.getByRole("heading", { name: /Unlock the Power Of Future AI/i })
    ).toBeInTheDocument();
  });
});
