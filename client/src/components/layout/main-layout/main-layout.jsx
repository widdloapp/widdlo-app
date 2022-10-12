import {Layout} from "@douyinfe/semi-ui";

import style from "./main-layout.module.css";

export default function MainLayout(props) {

    const { Header, Sider } = Layout;

    return (
        <Layout className={style["full-layout"]}>
            <Header className={style["header"]}>Header</Header>
            <Layout >
                <Sider className={style["slider"]}>Sider</Sider>
                {props.content}
            </Layout>
        </Layout>
    );
}
