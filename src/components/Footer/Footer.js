export const Footer = () => {
  return (
    <footer className="site-footer bg-white py-[100px] mt-[100px]">
      <div className="container">
        <div className="flex">
          <div className="site-footer--links w-1/4">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/work/logos/">Work</a>
              </li>
              <li>
                <a href="/new/">New</a>
              </li>
              <li>
                <a href="/about/">About</a>
              </li>
              <li>
                <a href="/contact/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="site-footer--address w-1/4">
            <span>
              <strong>Chermayeff &amp; Geismar &amp; Haviv</strong>
              <br />
              27 West 24th Street, Suite 900
              <br />
              New York, NY 10010
              <br />
              212.532.4595
            </span>
          </div>
          <div className="site-footer--contact w-1/4">
            <ul>
              <li>
                <span>
                  <strong>Work Inquiries</strong>
                  <br />
                  <a
                    href="mailto:info@cghnyc.com"
                    rel="noopener"
                    target="_blank"
                  >
                    info@cghnyc.com
                  </a>
                  <br />
                </span>
              </li>
              <li>
                <span>
                  <strong>Press Inquiries</strong>
                  <br />
                  Christopher Nutter
                  <br />
                  917.770.0350
                  <br />
                  <a
                    href="mailto:press@cghnyc.com"
                    rel="noopener"
                    target="_blank"
                  >
                    press@cghnyc.com
                  </a>
                </span>
              </li>
            </ul>
          </div>
          <div className="site-footer--social w-1/4">
            <ul>
              <li>
                <a
                  href="https://twitter.com/cghnyc"
                  rel="noopener"
                  target="_blank"
                >
                  Twitter
                </a>
                <br />
              </li>
              <li>
                <a
                  href="https://www.instagram.com/chermayeff_geismar_haviv/"
                  rel="noopener"
                  target="_blank"
                >
                  Instagram
                </a>
                <br />
              </li>
              <li>
                <a
                  href="https://www.facebook.com/cghnyc"
                  rel="noopener"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
