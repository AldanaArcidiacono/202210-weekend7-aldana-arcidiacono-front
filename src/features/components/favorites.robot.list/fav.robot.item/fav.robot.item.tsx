import { Robot } from "../../../entities/robots";

export function FavRobotItem({ item }: { item: Robot }) {
    return (
        <>
            <p>{item.name}</p>
            <img src={item.img} alt={"Image of" + item.name} height="300" />
        </>
    );
}
