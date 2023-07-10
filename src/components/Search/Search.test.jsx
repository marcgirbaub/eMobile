import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe("Given a Search component", () => {
  describe("When rendered", () => {
    test("Then it should show an input with the placeholder `Search by brand and model`", () => {
      const placeholder = "Search by brand and model";

      render(
        <Search className={""} onChangeHandler={() => {}} searchValue={""} />,
      );

      const inputElement = screen.getByPlaceholderText(placeholder);

      expect(inputElement).toBeInTheDocument();
    });
  });
});
