import { FavRobotList } from "../components/favorites.robot.list/fav.robot.list/fav.robot.list";
import { useRobot } from "../hooks/userobot";
import styles from "./home.page.module.css";

function FavoritesPage() {
    const { robots } = useRobot();

    return (
        <main>
            <h2 className={styles.home__title}>Mis Robots favoritos 🤖❤</h2>
            <FavRobotList item={robots}></FavRobotList>
        </main>
    );
}

export default FavoritesPage;
