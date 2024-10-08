import style from "../calltoaction/calltoaction.module.css";
import ultra70 from "../../assets/img/ultra-pura-70.png";
import Button from "../button/button";
import Xmage from "../../assets/img/xmage.svg"

const Calltoaction = () => {
  return (
    <section className={style.Calltoaction}>
      <div className={style.CalltoactionWrapper}>
        <div className={style.actionContent}>
          <h2 className={style.actioTitle}>
            Huawei<span> Pura70 Ultra</span>
            <span className={style.subTitle}><img src={Xmage} alt="xmage" /></span>
          </h2>
          <p>
            Pura, é a nova vida Nascido puro e único Explore a beleza invisível
            com imaginação ousada Abra novos horizontes com uma perspectiva
            pioneira Liderando a tendência da moda com estilo original HUAWEI
            Pura Persiga seu coração e siga em frente com determinação
          </p>
          <div className={style.containerButton}>
            <Button links="/">Comprar</Button>
          </div>
        </div>
        <div className={style.imgContainerMove}>
          <img src={ultra70} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Calltoaction;
