import Button from "components/Button/Button";
import background from "assets/images/bg-pattern-intro-desktop.svg"

export default function Hero({ data }) {

  console.log(data);
    return (
      <section className="hero">
        <img className="hero__background" src={background} alt="" />
        <div className="hero__content text-white">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <div className="hero__cta">
            {data.button.map((btn, index) => {
              if (btn.type === "white") {
                return <Button isWhite>{btn.title}</Button>;
              } else if (btn.type === "outline") {
                return <Button isBorder>{btn.title}</Button>;
              } else {
                return <Button isPrimary>{btn.title}</Button>;
              }
            })}
          </div>
        </div>
      </section>
    );
}
