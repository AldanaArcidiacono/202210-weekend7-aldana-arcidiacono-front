import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../infrastructure/store/store";
import FavoritesPage from "./favorites.page";

describe("Given Home component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <FavoritesPage />
                    </Router>
                </Provider>
            );
        });
        test("Then it should display the title", () => {
            const element = screen.getByText(/favoritos/i);
            expect(element).toBeInTheDocument();
        });
    });
});
