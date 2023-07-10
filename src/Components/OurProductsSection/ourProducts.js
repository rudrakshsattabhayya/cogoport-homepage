import "./ourProducts.css";
import ourProducts from "./productInfo";

const OurProductsSection = () => {
  return (
    <div className="ourProductSectionContainer">
      <div>
        <div className="oneStepSection">
          <div style={{ display: "block" }}>
            <h2>
              One Stop Solution for Your
              <br />
              Supply Chain
            </h2>
            <p className="oneStepSectionPara">
              Connected Shipping, Finance, and Trade-tech, to Power Global Trade
              and Supply Chains.
            </p>
          </div>
          <div className="oneStepSectionImgContainer">
            <img
              src="./Our-Products-Section/map-supply-chain.webp"
              alt="product check"
              className="oneStepSectionImg"
            />
          </div>
        </div>
      </div>
      <div className="ourProductsContainer">
        <h2 className="ourProductsHeading">Our Products</h2>
        <div className="ourProductsListContainer1">
          <div className="ourProductsListContainer2">
            {ourProducts.map((product, index) => {
              return (
                <div className="ourProductsListContainer2InnerDiv">
                <h4>{product.heading}</h4>
                <div className="ourProductsListItem" key={index}>
                  {product.items.map((item, innerIndex) => {
                    return (
                      <div className="ourProductsListItemRight" key={innerIndex}>
                        <a
                          href="/"
                          style={{
                            textDecoration: "none",
                            color: "#ee3425",
                            cursor: "pointer",
                          }}
                        >
                          <div>
                            {item.logo()}
                            <h4>
                              {item.heading}
                              {item.br && <br />}
                              {item.br && item.afterBrText}
                            </h4>
                            <span className="cardFindOutMore">
                              <span className="cardFindOutMoreText">
                                Find Out More
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 14 14"
                                width="1em"
                                height="1em"
                                role="img"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.945 2.518c-.184.085-.362.325-.361.485.001.161.077.246 1.648 1.861.858.882 1.563 1.613 1.567 1.625.005.012-1.855.023-4.503.027l-4.511.006-.086.053c-.124.077-.186.22-.186.425s.062.348.186.425l.086.053 4.511.006c2.648.004 4.508.015 4.503.027-.004.012-.709.743-1.567 1.625-1.076 1.106-1.574 1.634-1.604 1.7a.495.495 0 0 0-.044.166c0 .226.305.525.536.525.115 0 .247-.083.427-.268l1.935-1.988c.972-1 1.798-1.835 1.836-1.858.093-.055.199-.275.199-.413 0-.138-.106-.358-.198-.413-.038-.022-.864-.858-1.836-1.857L8.547 2.741c-.256-.263-.402-.316-.602-.223"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProductsSection;
