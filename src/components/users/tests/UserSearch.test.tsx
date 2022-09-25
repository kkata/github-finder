import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { UserSearch } from "../UserSearch";

describe("input form event", () => {
  test("input 'test'", async () => {
    render(<UserSearch />);
    const user = userEvent.setup();

    await user.type(screen.getByRole("textbox"), "test");
    expect(screen.getByRole("textbox")).toHaveValue("test");
  });
});
