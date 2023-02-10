import style from "./widdlo-one.module.css";

export default function WiddloOne() {

    return (
        <div className={style["container"]}>
            <div className={style["wrapper"]}>
                <div className={style["feature-wrapper"]}>
                    <div className={style["box"]} id={style["featured"]}>
                        <h1>Presentamos Widdlo One.</h1>
                        <p>Destaca entre los demás y disfruta de ventajas únicas con Widdlo One.</p>
                    </div>
                    <div className={style["box"]} id={style["full"]}>
                        <h1><mark>Widdlo One</mark></h1>
                        <p>Consigue acceso instántaneo a todas las funcionalidades de Widdlo.<br />Disponible por solo 3.99€/mes.</p>
                    </div>
                    <div className={style["box"]}>
                        <h1><mark>Insignia única</mark></h1>
                        <p>Obtendrás una insignia única en tu perfil que destacará en todas partes y transimitirá autenticidad.</p>
                    </div>
                    <div className={style["box"]}>
                        <h1><mark>Suscripción One</mark></h1>
                        <p>Apoya a tu creador favorito con una suscripción One de regalo incluida gratuitamente cada mes.</p>
                    </div>
                    <div className={style["box"]}>
                        <h1><mark>Estilo especial</mark></h1>
                        <p>Haz tu perfil aún más llamativo con colores de gradiente, etiquetas especiales, y emoticonos.</p>
                    </div>
                    <div className={style["box"]}>
                        <h1><mark>Temas especiales</mark></h1>
                        <p>Personalizar los colores que verás en Widdlo y los demás verán sobre tí. Seguro que se verá genial.</p>
                    </div>
                    <div className={style["box"]}>
                        <h1><mark>Exprésate más</mark></h1>
                        <p>Publica comentarios más largos (hasta 600 caracteres) en los vídeos y adjunta GIFs.</p>
                    </div>
                    <div className={style["box"]}>
                        <h1><mark>Soporte prioritario</mark></h1>
                        <p>Contacta con nosotros más rápido, tus dudas quedarán resueltas en un periquete.</p>
                    </div>
                    <div className={style["box"]} id={style["featured"]}>
                        <h1>¡Sorteos y mucho más!</h1>
                        <p>Tenemos una comunidad exclusiva, donde podrás hablar con nuestro equipo y participar en sorteos masivos. También estamos
                            constantemente haciendo regalos globales. Descubre todo lo que hemos hecho últimamente en nuestras redes.</p>
                        <div className={style["button-wrap"]}>
                            <button className="forbidden">Disponible este 2023</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}