import Button from "components/Button/Button";
import background from "assets/images/bg-pattern-intro-desktop.svg"

export default function Hero() {
    return (
      <section class="hero">
        <img className="hero__background" src={background} alt="" />
        <div className="hero__content text-white">
          <h1>A modern publishing platform</h1>
          <p>Grow your audience and build your online brand</p>
          <div className="hero__cta">
            <Button isWhite>Start for Free</Button>
            <Button isBorder>Learn More</Button>
          </div>
        </div>
      </section>
    );
}
