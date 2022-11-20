import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from "./layout";

describe("Given Layout component", () => {
    describe("When we render the component", () => {
        test("Then it should display the robots name", () => {
            render(
                <Router>
                    <Layout>
                        <p>Pepe</p>
                    </Layout>
                </Router>
            );
            const element = screen.getByText(/Pepe/i);
            expect(element).toBeInTheDocument();
        });
    });
});
