import "./Card.css";

function Card(props) {
  const plan = props.data;

  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {plan.packageName}
          </h5>
          <h6 className="card-price text-center">
            {plan.currency}
            {plan.price}
            <span className="period">/{plan.period}</span>
          </h6>
          <hr />
          <ul className="fa-ul">
            {plan.features.map((feature) => {
              return (
                <li className={feature.isEnabled ? "" : "text-muted"}>
                  <span className="fa-li">
                    <i
                      className={`fas ${
                        feature.isEnabled ? "fa-check" : "fa-times"
                      }`}
                    ></i>
                  </span>
                  {feature.isBold ? (
                    <strong>{feature.name}</strong>
                  ) : (
                    <span>{feature.name}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="d-grid">
            <button className="btn btn-primary text-uppercase">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
