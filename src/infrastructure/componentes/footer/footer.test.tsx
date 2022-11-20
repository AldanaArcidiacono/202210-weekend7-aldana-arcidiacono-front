import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Given Footer component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(<Footer />);
        });
        test("Then it should display the creator's surname", () => {
            const element = screen.getByText(/Arcidiacono/i);
            expect(element).toBeInTheDocument();
        });
    });
});
