import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { useRouter } from "next/router";

const Header = ({ headerColor, isTransparent }) => {
  const [activeLink, setActiveLink] = useState("Home");
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    console.log("pathname", pathname);
    // Set the active link based on the pathname
    setActiveLink(pathname.substring(1)); // Remove the leading '/'
  }, [router.query]);

  return (
    <header>
      <Accordion>
        <nav
          className={`navbar header-nav header-${headerColor} navbar-expand-lg`}
        >
          <div className="container">
            {/* Brand */}
            <a className="navbar-brand" href="/">
              Portfolio <span className="theme-bg" />
            </a>
            {/* / */}
            {/* Mobile Toggle */}
            <Accordion.Toggle
              as="button"
              className="navbar-toggler"
              type="button"
              eventKey="toggle"
            >
              <span />
              <span />
              <span />
            </Accordion.Toggle>
            {/* / */}
            {/* Top Menu */}
            <Accordion.Collapse
              eventKey="toggle"
              className="navbar-collapse justify-content-end"
              id="navbar-collapse-toggle"
            >
              <ul className="navbar-nav ml-auto nav-ul">
                <li>
                  <a
                    className={`nav-link ${
                      activeLink === "" ? "active" : ""
                    }`}
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${
                      activeLink === "aboutus" ? "active" : ""
                    }`}
                    href="/aboutus"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${
                      activeLink === "services" ? "active" : ""
                    }`}
                    href="/services"
                  >
                    services
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${
                      activeLink === "portfolio" ? "active" : ""
                    }`}
                    href="/portfolio"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    className={`nav-link ${
                      activeLink === "blog" ? "active" : ""
                    }`}
                    href="/blog"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className={`nav-link ${
                      activeLink === "contact" ? "active" : ""
                    }`}
                    href="/contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </Accordion.Collapse>
          </div>
        </nav>
      </Accordion>
    </header>
  );
};
export default Header;
