import paletas from "./paleta.module.css"

const Paleta = ({paleta}) => {
    console.log("className={paleta[]" + (`${paleta}`+"-1"))
    return (
        <div className={paletas["container"]}>
            <h3>{paleta}</h3>
            <div className={paletas[`${paleta}`+"-1"]}>1</div>
            <div className={paletas[`${paleta}`+"-2"]}>2</div>
            <div className={paletas[`${paleta}`+"-3"]}>3</div>
            <div className={paletas[`${paleta}`+"-4"]}>4</div>
        </div>
    )
};

export default Paleta;
