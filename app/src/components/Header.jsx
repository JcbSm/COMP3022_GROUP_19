import styles from "./Header.module.css";
import NavButton from "./NavButton";

const Header = () => {

    return (
        <div className={styles["header"]}>
            <NavButton dest={"/Q1"}>🦺 Emergency Services</NavButton>
            <NavButton dest={"/Q2"}>📈 Report Analytics</NavButton>
            <NavButton dest={"/Q3"}>⌚ Temporal Analysis</NavButton>
        </div>
    );

};

export default Header;