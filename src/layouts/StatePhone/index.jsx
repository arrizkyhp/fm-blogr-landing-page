import phone from "assets/images/illustration-phones.svg"

export default function StatePhone() {
    return (
      <section className="state-phone">
        <div className="state-phone__content">
            <img src={phone} alt="two phone illustration" className="phone" />
            <div className="state-phone__content__text">
              <div className="text-group">
                <h1>State of the Art Infrastructure</h1>
                <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
              </div>
            </div>
        </div>
      </section>
    );
}
