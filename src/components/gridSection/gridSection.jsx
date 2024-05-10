import style from "../gridSection/gridSection.module.css";
import ultra70Grid from "../../assets/img/ultra-pura-70.png";
import ultra70GridMais from "../../assets/img/70+.png";

const GridSection = () => {
  return (
    <section className={style.gridSection}>
      <div className={style.gridWrapper}>
        <div className={style.gridRow1}>
          <div className={style.gridContainer}>
            <div className={style.gridContent}>
              <h2>
                Huawei <span>Pura70 Ultra</span>
              </h2>
              <p>
                Pura, é a nova vida Nascido puro e único Explore a beleza
                invisível com imaginação ousada Abra novos horizontes com uma
                perspectiva pioneira.
              </p>
            </div>
            <img src={ultra70Grid} alt="" />
          </div>
          <div className={style.gridContainer}>
            <div className={style.gridContent}>
              <h2>
                Huawei <span>Pura70 Ultra</span>
              </h2>
              <p>
                Pura, é a nova vida Nascido puro e único Explore a beleza
                invisível com imaginação ousada Abra novos horizontes com uma
                perspectiva pioneira.
              </p>
            </div>
            <img src={ultra70Grid} alt="" />
          </div>
        </div>
        <div className={style.gridRow2}>
          <div className={style.gridContainer2}>
            <div className={style.gridContent}>
              <h2>
                Huawei <span>Pura70 Ultra</span>
              </h2>
              <p>
                Pura, é a nova vida Nascido puro e único Explore a beleza
                invisível com imaginação ousada Abra novos horizontes com uma
                perspectiva pioneira.
              </p>
            </div>
              <img src={ultra70GridMais} width={400} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
