import Button from "components/Button/Button";
import background from "assets/images/bg-pattern-intro-desktop.svg"

export default function Hero({ data }) {
    return (
      <section className="hero">
        <img className="hero__background" src={background} alt="background" />
        <div className="hero__content text-white">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className="hero__cta">
            {data.button.map((btn, index) => {
              return <Button
                isWhite={btn.type === "white" ? true : false }
                isBorder={btn.type === "border" ? true : false }
                isPrimary={btn.type === "primary" ? true : false }
                key={`button-${btn._id}`}
              >{btn.title}</Button>
            })}
          </div>
        </div>
      </section>
    );
}
