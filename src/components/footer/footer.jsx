import styles from "./footer.module.css";
import Logo from "../../assets/img/logo.svg";
// import faceIcon from "../../assets/img/insta.svg";
// import instaIcon from "../../assets/img/face.svg";
// import twitterIcon from "../../assets/img/x.svg";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
          <div>
            <img className={styles.FooterLogo} src={Logo} alt="" />
            <span className={styles.FooterP}>
              A HUAWEI é fornecedora líder global da indústria de tecnologia da
              informação e comunicação (TIC) e de dispositivos inteligentes. Com
              soluções integradas que abrangem quatro domínios chave – redes de
              telecomunicação, TI, dispositivos inteligentes e serviços de nuvem
              – estamos empenhados em trazer a tecnologia digital a cada pessoa,
              casa e a todas as organizações, para um mundo totalmente conectado
              e inteligente.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.wrraperList}>
        <div>
          <div className={styles.titleLi}>
            <span>Equipamentos Huawei</span>
          </div>
          <div className={styles.listLink}>
            <ul className={styles.ulLink}>
              <li>
                <a href="">Smartphones</a>
              </li>
              <li>
                <a href="">Smartwatch</a>
              </li>
              <li>
                <a href="">Áudio</a>
              </li>
              <li>
                <a href="">Acessórios</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.titleLi}>
            <span>Suporte</span>
          </div>
          <div className={styles.listLink}>
            <ul className={styles.ulLink}>
              <li>
                <a href="">Localização do Serviço de Assistência</a>
              </li>
              <li>
                <a href="">Logística Reversa e Reciclagem</a>
              </li>
              <li>
                <a href="">Consulta de Política de Garantia</a>
              </li>
              <li>
                <a href="">Declaração de privacidade de suporte</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={styles.titleLi}>
            <span>Sobre a Huawei</span>
          </div>
          <div className={styles.listLink}>
            <ul className={styles.ulLink}>
              <li>
                <a href="">Sobre a HUAWEI</a>
              </li>
              <li>
                <a href="">HUAWEI Grupo</a>
              </li>
              <li>
                <a href="">HUAWEI Enterprise</a>
              </li>
              <li>
                <a href="">HUAWEI Operadoras</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.containerCopy}>
        <div className={styles.copyWrapper}>
          <div className={styles.copyP}>
            <p>© 2024 Huawei. Todos os direitos reservados.</p>
          </div>
          <div className={styles.listCopy}>
            <div className={styles.policyCopy}>
              <a href="">Política de Privacidade</a>
            </div>
            <div className={styles.termsCopy}>
              <a href="">Termos de Utilização</a>
            </div>
            <div>
              <a href="">Cookie</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
