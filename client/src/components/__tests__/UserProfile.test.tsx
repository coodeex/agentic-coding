import { render, screen, fireEvent } from "@testing-library/react";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import { UserProfile } from "../UserProfile";

jest.mock("next-auth/react");
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />;
  },
}));

const mockSession: Session = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    image: "https://example.com/avatar.jpg",
  },
  expires: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
};

describe("UserProfile Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders nothing when session is null", () => {
    const { container } = render(<UserProfile session={null} />);
    expect(container.firstChild).toBeNull();
  });

  test("displays user name and email when session exists", () => {
    render(<UserProfile session={mockSession} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john@example.com")).toBeInTheDocument();
  });

  test("displays user avatar image when session exists", () => {
    render(<UserProfile session={mockSession} />);

    const image = screen.getByAltText("John Doe");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  test("renders sign out button", () => {
    render(<UserProfile session={mockSession} />);

    const button = screen.getByRole("button", { name: /sign out/i });
    expect(button).toBeInTheDocument();
  });

  test("calls signOut when sign out button is clicked", () => {
    render(<UserProfile session={mockSession} />);

    const button = screen.getByRole("button", { name: /sign out/i });
    fireEvent.click(button);

    expect(signOut).toHaveBeenCalledWith({
      redirect: true,
      redirectTo: "/",
    });
  });
});
