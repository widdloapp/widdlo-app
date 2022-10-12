import {Button, Modal} from "@douyinfe/semi-ui";

import {useState} from "react";

import style from "./login-modal.module.css";

export default function LoginModal() {

    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Button className="main" onClick={() => setVisible(true)}>Iniciar sesión</Button>
            <Modal visible={visible}>
                <h1>a</h1>
            </Modal>
        </div>
    );
}