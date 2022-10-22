import style from "./file-upload.module.css";

export default function FileUpload() {

    const handleDrop = (event) => {
        event.preventDefault();
        event.stopPropagation();
        alert("a")
        console.log(event.dataTransfer.files);
    };

    return (
        <div className={style["container"]}>
            <input className={style["uploader"]} accept="image/*" type="file" />
        </div>
    );
}