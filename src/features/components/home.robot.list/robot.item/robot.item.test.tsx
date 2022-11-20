import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../../../infrastructure/store/store";
import { useRobot } from "../../../hooks/userobot";
import { RobotItem } from "./robot.item";

jest.mock("../../../hooks/userobot");

describe("Given RobotItem component", () => {
    describe("When we render the component", () => {
        test("Then it should display", async () => {
            const mockRobot = {
                id: "as12df3",
                name: "Pepe",
                img: "url.img",
                speed: 5,
                strength: 4,
                creationDate: "05/85",
            };

            (useRobot as jest.Mock).mockReturnValue({
                products: [mockRobot],
            });

            render(
                <Router>
                    <Provider store={appStore}>
                        <RobotItem item={mockRobot} />
                    </Provider>
                </Router>
            );
            const element = await screen.findByText(/Pepe/i);
            expect(element).toBeInTheDocument();
        });
    });
});
