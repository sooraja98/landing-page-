import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import table from '../assets/table.png'

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={table} alt="table" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Effortlessly Locate Your Products <br className="sm:block hidden" /> 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Effortlessly locate the aviation parts you need with our user-friendly platform, streamlining your procurement process      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        {/* add the mobile application links when we relese */}
        <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
