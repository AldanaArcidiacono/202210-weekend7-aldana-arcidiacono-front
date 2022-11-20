import { Robot } from "../../../entities/robots";

export function RobotItem({ item }: { item: Robot }) {
    return (
        <>
            <p>{item.name}</p>
            <img src={item.img} alt={"Image of" + item.name} height="200" />
            <p>Velocidad: {item.speed}</p>
            <p>Fuerza: {item.strength}</p>
            <p>Fecha de creación: {item.creationDate}</p>
        </>
    );
}
