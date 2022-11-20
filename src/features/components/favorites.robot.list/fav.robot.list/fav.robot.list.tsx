import { Robot } from "../../../entities/robots";
import { RobotItem } from "../fav.robot.item/fav.robot.item";

export function RobotList({ item }: { item: Robot[] }) {
    return (
        <div>
            <ul>
                {item.map((item: Robot) => (
                    <li key={item.id}>
                        <RobotItem item={item}></RobotItem>
                    </li>
                ))}
            </ul>
        </div>
    );
}
