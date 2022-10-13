import style from "./main-layout.module.css";
import Navbar from "../../ui/main/navbar/navbar";

export default function MainLayout(props) {

    return (
        <div className={style["full-layout"]}>
            <div className={style["header"]}><Navbar /></div>
            <div>
                <div className={style["slider"]} />
                {props.content}
            </div>
        </div>
    );
}
