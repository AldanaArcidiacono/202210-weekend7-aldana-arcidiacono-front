import { Robot } from "../../../entities/robots";
import { FavRobotItem } from "../fav.robot.item/fav.robot.item";
import styles from "./fav.robot.list.module.css";

export function FavRobotList({ item }: { item: Robot[] }) {
    return (
        <div>
            <h3 className={styles.favRobot__title}>Lista de robots</h3>
            <ul>
                {item.map((item: Robot) => (
                    <li key={item.id}>
                        <FavRobotItem item={item}></FavRobotItem>
                    </li>
                ))}
            </ul>
        </div>
    );
}
