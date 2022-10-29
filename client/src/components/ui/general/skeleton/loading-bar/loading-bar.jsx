import {useGlobal} from "reactn";

import {useEffect, useRef} from "react";

export default function LoadingBar() {

    const [loading, setLoading] = useGlobal("loading");
    /*const ref = useRef(null);

    return (
        <LoadingBar ref={ref} />
    );
    useEffect(() => ref.current.continuousStart());*/

}