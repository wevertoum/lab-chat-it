import { render, screen, fireEvent } from "@testing-library/react";
import EditInformation from "../../../../src/app/profile/preferences/edit-information/page";
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Edit Information Page", () => {
  it("renders edit information page unchanged", () => {
    const push = jest.fn();
    useRouter.mockImplementation(() => ({ push }));

    render(<EditInformation />);

    const heading = screen.getByRole("heading", { name: /Edit Information/i });
    expect(heading).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /back to preferences/i });
    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith("/profile/preferences");
  });
});
