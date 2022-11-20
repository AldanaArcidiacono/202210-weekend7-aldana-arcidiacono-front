import { Robot } from "../../../entities/robots";

export function FavRobotItem({ item }: { item: Robot }) {
    return (
        <>
            <h3>{item.name}</h3>
            <img
                src={item.img}
                alt={"Image of the robot" + item.name}
                height="300"
            />
        </>
    );
}
