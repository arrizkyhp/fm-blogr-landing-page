import { useMediaQuery } from 'react-responsive';
import laptop_desktop from 'assets/images/illustration-laptop-desktop.svg'
import laptop_mobile from 'assets/images/illustration-laptop-mobile.svg'

export default function LaptopSection({ data }) {
  const isDesktop = useMediaQuery({ query: '(min-width: 720px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 720px)' })

    return (
      <div className="laptop-section" >
        <div className="laptop-section__content">
          {isDesktop && <img src={laptop_desktop} alt="" className="laptop-section__content__illustration" />}
          {isMobile && <img src={laptop_mobile} alt="" className="laptop-section__content__illustration" />}
          <div className="laptop-section__content__text">
            <div className="text-column">
              {data.map((text) => {
                return (
                  <div className="text-group" key={text._id}>
                    <h1>{text.title}</h1>
                    <p>{text.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}
