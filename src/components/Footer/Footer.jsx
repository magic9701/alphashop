import styles from "components/Footer/Footer.module.scss"
import logo from "assets/icons/icon-logo.svg"
import facebook from "assets/icons/facebook.svg"
import instagram from "assets/icons/instagram.svg"
import whatsapp from "assets/icons/whatsapp.svg"

const sectionOne = ["運送說明", "退換貨相關", "付款資訊", "FAQ"]
const sectionTwo = ["品牌故事", "媒體聯繫", "Press kit"]
const sectionThree = ["隱私權政策", "Cookie", "GDPR"]

function PageLink ({item}) {
  return (
    <a className="page-link" href="#">{item}</a>
  )
}

export default function Footer() {
  return(
    <footer className="site-footer">
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoContainer}>
          <img className={styles.logoIcon}src={logo} alt="logo" />
        </div>
        <section className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>客戶服務</h2>
          <div className={styles.sectionContent}>
            {sectionOne.map((item, index) => 
              <PageLink item={item} key={index} />
            )}
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>關於我們</h2>
          <div className={styles.sectionContent}>
            {sectionTwo.map((item, index) => 
              <PageLink item={item} key={index} />
            )}
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>資訊</h2>
          <div className={styles.sectionContent}>
            {sectionThree.map((item, index) => 
              <PageLink item={item} key={index} />
            )}
          </div>
        </section>
        <section className={styles.footerSection}>
          <h2 className={styles.sectionTitle}>追蹤 ALPHA Shop</h2>
          <div className={styles.sectionContent}>
            <div className="tel-info">+886 02123-45678</div>
            <div className={styles.socialIconGroup}>
              <img className={styles.facebook} src={facebook} alt="facebook" />
              <img className={styles.instagram} src={instagram} alt="instagram" />
              <img className={styles.whatsapp} src={whatsapp} alt="whatsapp" />
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}