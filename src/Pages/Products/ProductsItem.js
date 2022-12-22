import IMG from "../../Assets/Images/products.png";
import ProductAdd from "../../Components/Add";
import ProductDetails from "../../Components/Details";

const FirstProduct = (
    <div className="Products">
      <img src={IMG} alt="ProductImage" />
      <div className="ProductShadow">
        <div className="ProductText">
          <div className="ProductTextDiv">
            <span>ZARA - CLOTHING STORE UI KIT</span>
            <br />
            <span className="ProductText2">
              OK THIS PRODUCT CONATIN ONE OF THE MOS HIGH VALUE...
            </span>
          </div>

          <div className="ProductDescDiv">
            <span>3.6 ETH</span>
            <br />
            <span className="ProductText4">3 DAYS AGO</span>
          </div>
        </div>
      </div>
      <div className="ProductButton">
        <ProductAdd />
        <ProductDetails />
      </div>
    </div>
);
const SecondProduct = (
    <div className="Products">
      <img src={IMG} alt="ProductImage" />
      <div className="ProductShadow">
        <div className="ProductText">
          <div className="ProductTextDiv">
            <span>ZARA - CLOTHING STORE UI KIT</span>
            <br />
            <span className="ProductText2">
              OK THIS PRODUCT CONATIN ONE OF THE MOS HIGH VALUE...
            </span>
          </div>

          <div className="ProductDescDiv">
            <span>3.6 ETH</span>
            <br />
            <span className="ProductText4">3 DAYS AGO</span>
          </div>
        </div>
      </div>
      <div className="ProductButton">
        <ProductAdd />
        <ProductDetails />
      </div>
    </div>
);
const ThirdProduct = (
    <div className="Products">
      <img src={IMG} alt="ProductImage" />
      <div className="ProductShadow">
        <div className="ProductText">
          <div className="ProductTextDiv">
            <span>ZARA - CLOTHING STORE UI KIT</span>
            <br />
            <span className="ProductText2">
              OK THIS PRODUCT CONATIN ONE OF THE MOS HIGH VALUE...
            </span>
          </div>

          <div className="ProductDescDiv">
            <span>3.6 ETH</span>
            <br />
            <span className="ProductText4">3 DAYS AGO</span>
          </div>
        </div>
      </div>
      <div className="ProductButton">
        <ProductAdd />
        <ProductDetails />
      </div>
    </div>
);
export default [FirstProduct, SecondProduct, ThirdProduct];
