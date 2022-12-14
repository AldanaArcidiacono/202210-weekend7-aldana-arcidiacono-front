import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../infrastructure/store/store";
import { useRobot } from "../../../hooks/userobot";
import { FavoriteRobotItem } from "./fav.robot.item";

jest.mock("../../../hooks/userobot");

describe("Given FavoriteRobotItem component", () => {
    describe("When we render the component", () => {
        test("Then it should display", async () => {
            const mockRobot = {
                id: "a4s5d6",
                name: "Ernesto",
                img: "url.img.png",
                speed: 10,
                strength: 2,
                creationDate: "07/08",
            };

            (useRobot as jest.Mock).mockReturnValue({
                products: [mockRobot],
            });

            render(
                <Router>
                    <Provider store={appStore}>
                        <FavoriteRobotItem item={mockRobot} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/Ernesto/i);
            expect(element).toBeInTheDocument();
        });
    });
});
