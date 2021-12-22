import illustration from "assets/images/illustration-editor-desktop.svg";

export default function Designed() {
    return (
      <section className="designed">
        <h1 className="designed__title text-very-dark-blue">Designed for the future</h1>
        <div className="designed__content">
          <div className="designed__content__text">
            <div className="content__text text-very-dark-blue">
              <h2>Introducing an extensible editor</h2>
              <p>
                Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and
                Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.
              </p>
            </div>
            <div className="content__text text-very-dark-blue">
              <h2>Robust content management</h2>
              <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
            </div>
          </div>
          <div className="designed__content__image">
            <img src={illustration} alt="illustration" />
          </div>
        </div>
      </section>
    );
}
