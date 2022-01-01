import illustration_desktop from "assets/images/illustration-editor-desktop.svg";
import illustration_mobile from "assets/images/illustration-editor-mobile.svg";
import { useMediaQuery } from "react-responsive";

export default function Designed({ data }) {
  const isDesktop = useMediaQuery({ query: '(min-width: 720px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 720px)' })

    return (
      <div className="designed">
        <h1 className="designed__title text-very-dark-blue">{data.title}</h1>
        <div className="designed__content">
          <div className="designed__content__text">
            {data.text.map(txt => {
              return <div className="content__text text-very-dark-blue" key={txt._id}>
                 <h2>{txt.title}</h2>
                 <p>
                  {txt.description}
                 </p>
               </div>;
            })}

          </div>
          <div className="designed__content__image">
            {isDesktop && <img src={illustration_desktop} alt="illustration" />}
            {isMobile && <img src={illustration_mobile} alt="illustration" />}
          </div>
        </div>
      </div>
    );
}
