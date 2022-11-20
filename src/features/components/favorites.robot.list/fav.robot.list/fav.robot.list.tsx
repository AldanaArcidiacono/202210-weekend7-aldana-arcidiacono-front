import { Robot } from "../../../entities/robots";
import { FavoriteRobotItem } from "../fav.robot.item/fav.robot.item";
import styles from "./fav.robot.list.module.css";

export function FavRobotList({ item }: { item: Robot[] }) {
    return (
        <div>
            <h3 className={styles.favRobot__title}>Lista de robots</h3>
            <ul>
                {item.map((item: Robot) => (
                    <li key={item.id}>
                        <FavoriteRobotItem item={item}></FavoriteRobotItem>
                    </li>
                ))}
            </ul>
        </div>
    );
}
