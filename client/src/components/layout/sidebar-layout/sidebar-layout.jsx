import {Layout} from "@douyinfe/semi-ui";

import style from "./sidebar-layout.module.css";

export default function SidebarLayout(props) {

    const { Sider } = Layout;

    return (
        <Layout>
            <Sider className={style["slider"]}>Sider</Sider>
            {props.content}
        </Layout>
    );
}
