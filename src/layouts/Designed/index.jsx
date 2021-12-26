import illustration from "assets/images/illustration-editor-desktop.svg";

export default function Designed({ data }) {
    return (
      <section className="designed">
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
            <img src={illustration} alt="illustration" />
          </div>
        </div>
      </section>
    );
}
