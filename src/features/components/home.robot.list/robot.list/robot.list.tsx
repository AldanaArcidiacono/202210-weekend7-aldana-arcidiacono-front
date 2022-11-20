import { Robot } from "../../../entities/robots";
import { RobotItem } from "../robot.item/robot.item";
import styles from "../../favorites.robot.list/fav.robot.list/fav.robot.list.module.css";

export function RobotList({ item }: { item: Robot[] }) {
    return (
        <div>
            <ul>
                {item.map((item: Robot) => (
                    <li className={styles.favRobot__list} key={item.id}>
                        <RobotItem item={item}></RobotItem>
                    </li>
                ))}
            </ul>
        </div>
    );
}
