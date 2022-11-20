import { RobotList } from "../components/favorites.robot.list/fav.robot.list/fav.robot.list";
import { useRobot } from "../hooks/userobot";
import styles from "./home.page.module.css";

function HomePage() {
    const { robots } = useRobot();

    return (
        <main>
            <h2 className={styles.home__title}>Inicio🤖</h2>
            <RobotList item={robots}></RobotList>
        </main>
    );
}

export default HomePage;
