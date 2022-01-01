import phone from "assets/images/illustration-phones.svg"

export default function StatePhone({ data }) {
    return (
      <div className="state-phone" >
        <div className="state-phone__content">
            <img src={phone} alt="two phone illustration" className="phone" />
            <div className="state-phone__content__text">
              <div className="text-group">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
              </div>
            </div>
        </div>
      </div>
    );
}
