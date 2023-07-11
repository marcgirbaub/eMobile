import { screen } from "@testing-library/react";
import { mobileResponse } from "../../mocks/mobilesMocks";
import renderWithProviders from "../../utils/renderWithProviders";
import Description from "./Description";

describe("Given a Description component", () => {
  describe("When rendered with the Acer Iconia", () => {
    const acerMobile = mobileResponse;

    test("Then it should show a heading level 1 equal to the brand and model of the mobile", () => {
      const mobileName = `${acerMobile.brand} ${acerMobile.model}`;

      renderWithProviders(<Description mobile={acerMobile} />);

      const mobileNameElement = screen.getByRole("heading", {
        level: 1,
        name: mobileName,
      });

      expect(mobileNameElement).toBeInTheDocument();
    });

    test("Then it should show its battery, CPU and RAM specifications", () => {
      const { battery } = acerMobile;
      const { cpu } = acerMobile;
      const { ram } = acerMobile;

      renderWithProviders(<Description mobile={acerMobile} />);

      const batteryTextElement = screen.getByText(battery);
      const cpuTextElement = screen.getByText(cpu);
      const ramTextElement = screen.getByText(ram);

      expect(batteryTextElement).toBeInTheDocument();
      expect(cpuTextElement).toBeInTheDocument();
      expect(ramTextElement).toBeInTheDocument();
    });
  });
});
