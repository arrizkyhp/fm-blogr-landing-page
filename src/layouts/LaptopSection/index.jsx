import laptop from 'assets/images/illustration-laptop-desktop.svg'

export default function LaptopSection({ data }) {
    return (
      <section className="laptop-section">
        <div className="laptop-section__content">
          <img src={laptop} alt="" className="laptop-section__content__illustration" />
          <div className="laptop-section__content__text">
            <div className="text-column">
                {data.map( text => {
                  return <div className="text-group" key={text._id}>
                    <h1>{text.title}</h1>
                    <p>{text.description}</p>
                  </div>;
                })}

            </div>
          </div>
        </div>
      </section>
    );
}
