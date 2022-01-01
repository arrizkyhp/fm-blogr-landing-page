import { useMediaQuery } from "react-responsive";
import Button from "components/Button/Button";
import background_desktop from "assets/images/bg-pattern-intro-desktop.svg";
import background_mobile from "assets/images/bg-pattern-intro-mobile.svg";

export default function Hero({ data }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 720px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 720px)" });

  return (
    <main className="hero">
      {isDesktop && <img className="hero__background" src={background_desktop} alt="background" />}
      {isMobile && <img className="hero__background" src={background_mobile} alt="background" />}

      <div className="hero__content text-white">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <div className="hero__cta">
          {data.button.map((btn, index) => {
            return (
              <Button isWhite={btn.type === "white" ? true : false} isBorder={btn.type === "border" ? true : false} isPrimary={btn.type === "primary" ? true : false} key={`button-${btn._id}`}>
                {btn.title}
              </Button>
            );
          })}
        </div>
      </div>
    </main>
  );
}
