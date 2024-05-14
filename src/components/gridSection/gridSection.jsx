import style from "../gridSection/gridSection.module.css";
import ultra70GridMais from "../../assets/img/70+.png";
import mateX5 from "../../assets/img/huawei-mate-x5-deco-xmage.webp";
import Xmage from "../../assets/img/xmage.svg";
import Nova12Ultra from "../../assets/img/camera-intro@2x.webp";
import aprove70Pro from "../../assets/img/huawei-changxiang-70-pro-kv1 1.png";
import Button from "../button/button";

const GridSection = () => {
  return (
    <section className={style.gridSection} id="novos-projetos">
      <div className={style.textGrid}>
        <span>New</span>
        <h2>SmartPhones</h2>
        <p>Descubra mais sobre os novos celulares!</p>
      </div>
      <div className={style.gridWrapper}>
        <div className={style.gridRow1}>
          <div className={style.gridContainer}>
            <div className={style.gridContent}>
              <h2>
                Huawei <span>Nova 12 Ultra</span>
                <img src={Xmage} alt="" />
              </h2>
              <p>
                Pura é uma nova vida. Origina-se da pureza. Ela nasce única. Usa
                a imaginação ousada para explorar a beleza invisível. Ela
                persegue seu estilo original. coração verdadeiro e avança com
                determinação.
              </p>
              <Button links="/">Comprar</Button>
            </div>
            <img src={Nova12Ultra} width={330} alt="" />
          </div>
          <div className={style.gridContainer}>
            <div className={style.gridContent}>
              <h2 className={style.titleMateX5}>
                Huawei <span>Mate X5</span>
                <img src={Xmage} alt="" />
              </h2>
              <p>
                Pura, é a nova vida Nascido puro e único Explore a beleza
                invisível com imaginação ousada Abra novos horizontes com uma
                perspectiva pioneira.
              </p>
            </div>
            <img src={mateX5} alt="" />
          </div>
        </div>
        <div className={style.gridRow2}>
          <div className={style.gridContainer2}>
            <div className={style.gridContent}>
              <h2>
                Huawei <span>Pura70 Pro +</span>
                <img src={Xmage} alt="" />
              </h2>
              <p>
                Pura, é a nova vida Nascido puro e único Explore a beleza
                invisível com imaginação ousada Abra novos horizontes com uma
                perspectiva pioneira. O padrão xadrez tecido leve é em camadas e
                entrelaçados, e a luz e a sombra mudam, reproduzindo um
                movimento urbano.
              </p>
            </div>
            <img
              className={style.Ultramais}
              src={ultra70GridMais}
              width={250}
              alt=""
            />
          </div>
          <div className={style.gridContainer2}>
            <div className={style.gridContent}>
              <h2>
                Huawei <span>Aproveite 70 Pro</span>
              </h2>
              <p>
                O deslumbrante design do anel em estrela interpreta a estética
                da simetria do eixo central. O corpo fosco possui uma textura
                delicada que vai fazer você se apaixonar por ele ao primeiro
                toque.
              </p>
            </div>
            <img className={style.Ultramais} src={aprove70Pro} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
