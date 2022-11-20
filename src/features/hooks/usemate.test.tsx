import { renderHook, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { appStore } from "../../infrastructure/store/store";
import { ProtoRobot, Robot } from "../entities/robots";
import { RobotRepository } from "../services/robot.repository";
import { useRobot } from "./userobot";

jest.mock("../services/robot.repository");

const mockRobot = {
    id: "as12df3",
    name: "Pepe",
    img: "url.img",
    speed: 5,
    strength: 4,
    creationDate: "05/85",
};

const mockRobot2 = {
    id: "4re56w",
    name: "Ernesto",
    img: "url.img",
    speed: 2,
    strength: 1,
    creationDate: "05/95",
};

describe("Given the custom hook useRobot()", () => {
    let result: {
        current: {
            robots: Robot[];
            handleAdd: (newRobot: ProtoRobot) => void;
            handleUpdate: (updateRobot: Robot) => void;
            handleDelete: (robot: Robot) => void;
        };
    };

    beforeEach(() => {
        RobotRepository.prototype.getAll = jest
            .fn()
            .mockResolvedValue([mockRobot]);
        RobotRepository.prototype.create = jest
            .fn()
            .mockResolvedValue(mockRobot2);
        RobotRepository.prototype.update = jest
            .fn()
            .mockResolvedValue(mockRobot2);
        RobotRepository.prototype.delete = jest
            .fn()
            .mockResolvedValue(mockRobot);

        const wrapper = ({ children }: { children: JSX.Element }) => (
            <Provider store={appStore}>{children}</Provider>
        );
        ({ result } = renderHook(() => useRobot(), { wrapper }));
    });

    test("Then it should return mockRobot", async () => {
        await waitFor(() => {
            expect(result.current.robots).toEqual([mockRobot]);
        });
    });

    describe("'When we use the handleAdd(),", () => {
        test("Then it should return mockRobot and have been called", async () => {
            await waitFor(() => {
                result.current.handleAdd(mockRobot2);
                expect(result.current.robots.at(-1)).toEqual(mockRobot2);
            });
            await waitFor(() => {
                expect(RobotRepository.prototype.create).toHaveBeenCalled();
            });
        });
    });

    describe("'When we use the handleUpdate(),", () => {
        test("Then it should return the mockRobot2 updated and have been called", async () => {
            await waitFor(() => {
                result.current.handleUpdate(mockRobot2);
                expect(result.current.robots.at(-1)).toEqual(mockRobot);
            });
            await waitFor(() => {
                expect(RobotRepository.prototype.update).toHaveBeenCalled();
            });
        });
    });

    describe("'When we use the handleDelete(),", () => {
        test("Then it should return the same object and have been called", async () => {
            await waitFor(() => {
                result.current.handleDelete(mockRobot);
                expect(result.current.robots.at(-1)).toEqual(mockRobot);
            });
            await waitFor(() => {
                expect(RobotRepository.prototype.delete).toHaveBeenCalled();
            });
        });
    });
});
