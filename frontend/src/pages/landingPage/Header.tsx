import styles from "../layout/Layout.module.css";
import logo from "../../assets/logo_light.jpg";
import { Stack } from "@fluentui/react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className={styles.layout1}>
            <div className={`${styles.parentHeader}`}>
                <header className={styles.header} role={"banner"}>
                    <Stack horizontal verticalAlign="center" horizontalAlign="space-between">
                        <Stack horizontal verticalAlign="center" className={styles.logo}>
                            <img
                                src={logo}
                                className={styles.headerIcon}
                            />
                        </Stack>
                    </Stack>
                </header>
            </div>
        </div>
    );
};


export default Header;
