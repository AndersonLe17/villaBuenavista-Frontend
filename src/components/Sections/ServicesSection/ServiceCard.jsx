const ServicesCard = ({itemImg, title, text}) => {
  return (
    <div className="card item">
      <img src={itemImg} className="img-fluid" alt="item" />
      <div className="card-body text-center">
        <h4 className="card-title">{title}</h4>
        <p className="card-text fs-min">{text}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
