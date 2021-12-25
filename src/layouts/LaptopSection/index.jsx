import laptop from 'assets/images/illustration-laptop-desktop.svg'

export default function LaptopSection() {
    return (
      <section className="laptop-section">
        <div className="laptop-section__content">
          <img src={laptop} alt="" className="laptop-section__content__illustration" />
          <div className="laptop-section__content__text">
            <div className="text-column">
                <div className="text-group">
                  <h1>Free, open, simple</h1>
                  <p>
                    Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and
                    works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
                  </p>
                </div>
                <div className="text-group">
                  <h1>Powerful tooling</h1>
                  <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
}
