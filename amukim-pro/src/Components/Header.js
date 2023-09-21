import React from "react";

function Header() {
  return (
    <>
      <div className="header-section">
        <div
          data-animation="over-left"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          data-doc-height="1"
          role="banner"
          className="header-navbar w-nav"
        >
          <div className="container w-container">
            <div className="navbar-wrapper">
              <a
                href="index"
                aria-current="page"
                className="navbar-brand w-nav-brand w--current"
              >
                <img
                  src="logo2.png"
                  loading="lazy"
                  alt="Logo"
                  className="logo-image"
                  height="100px"
                  width="100px"
                />
              </a>

              <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
                <ul role="list" className="nav-menu w-list-unstyled">
                  <li className="nav-list-item">
                    <a
                      href="index"
                      aria-current="page"
                      className="nav-link w--current"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-list-item">
                    <a href="about" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="nav-list-item">
                    <a href="shop" className="nav-link">
                      Shop
                    </a>
                  </li>
                  <li className="nav-list-item dropdown-list-item">
                    <div
                      data-hover="false"
                      data-delay="0"
                      className="nav-dropdown w-dropdown"
                    >
                      <div className="nav-dropdown-toggle w-dropdown-toggle">
                        <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                        <div>Pages</div>
                      </div>
                      <nav className="nav-dropdown-list shadow-three mobile-shadow-hide w-dropdown-list">
                        <a
                          href="portfolio"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Portfolio
                        </a>
                        <a
                          href="service-page"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Services
                        </a>
                        <a
                          href="style-guide"
                          className="nav-dropdown-link w-dropdown-link"
                        >
                          Style Guide
                        </a>
                      </nav>
                    </div>
                  </li>
                  <li className="nav-list-item">
                    <a href="blog" className="nav-link">
                      Blog
                    </a>
                  </li>
                  <li className="nav-list-item">
                    <a href="contact" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="navbar-right-block">
                <div
                  data-node-type="commerce-cart-wrapper"
                  data-open-product=""
                  data-wf-cart-type="rightSidebar"
                  data-wf-page-link-href-prefix=""
                  className="w-commerce-commercecartwrapper"
                >
                  <a
                    href="#"
                    data-node-type="commerce-cart-open-link"
                    aria-haspopup="dialog"
                    aria-label="Open cart"
                    role="button"
                    className="w-commerce-commercecartopenlink cart-button w-inline-block"
                  >
                    <svg
                      className="w-commerce-commercecartopenlinkicon cart-icon"
                      width="17px"
                      height="17px"
                      viewBox="0 0 17 17"
                    >
                      <g
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <path
                          d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z"
                          fill="currentColor"
                          fillRule="nonzero"
                        ></path>
                      </g>
                    </svg>
                    <div className="cart-text w-inline-block">Cart</div>
                    <div
                      data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
                      className="w-commerce-commercecartopenlinkcount cart-cuantity"
                    >
                      0
                    </div>
                  </a>
                  <div
                    data-node-type="commerce-cart-container-wrapper"
                    style={{ display: "none" }}
                    className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar"
                    >
                    <div
                      role="dialog"
                      data-node-type="commerce-cart-container"
                      className="w-commerce-commercecartcontainer cart-container"
                    >
                      <div className="w-commerce-commercecartheader">
                        <h4 className="w-commerce-commercecartheading cart-header-text">
                          Your Cart
                        </h4>
                        <a
                          href="#"
                          data-node-type="commerce-cart-close-link"
                          role="button"
                          aria-label="Close cart"
                          className="w-commerce-commercecartcloselink icon-button w-inline-block"
                        >
                          <img
                            src="https://assets.website-files.com/63f05cba0a6a4d0a5deb5950/640973942cd6f7907dba4f17_close-icon.svg"
                            loading="lazy"
                            alt="Close Icon"
                          />
                        </a>
                      </div>
                      <div className="w-commerce-commercecartformwrapper">
                        
                        <div className="w-commerce-commercecartemptystate">
                          <div
                            aria-live="polite"
                            aria-label="This cart is empty"
                          >
                            No items found.
                          </div>
                        </div>
                        <div
                          aria-live="assertive"
                          style={{ display: "none" }}
                          data-node-type="commerce-cart-error"
                          className="w-commerce-commercecarterrorstate"
                        >
                          <div
                            className="w-cart-error-msg"
                            data-w-cart-quantity-error="Product is not available in this quantity."
                            data-w-cart-general-error="Something went wrong when adding this item to the cart."
                            data-w-cart-checkout-error="Checkout is disabled on this site."
                            data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
                            data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates."
                          >
                            Product is not available in this quantity.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-button-wrapper">
                  <a href="contact" className="button-primary w-button">
                    Contact Us
                  </a>
                </div>
                <div className="menu-button w-nav-button">
                  <div
                    data-w-id="608a5044-5cf7-4ac0-9616-b3cfd17b1b15"
                    className="line-shape-block"
                  >
                    <div
                      data-w-id="608a5044-5cf7-4ac0-9616-b3cfd17b1b16"
                      className="first-line"
                    ></div>
                    <div className="second-line"></div>
                    <div
                      data-w-id="608a5044-5cf7-4ac0-9616-b3cfd17b1b18"
                      className="third-line"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
