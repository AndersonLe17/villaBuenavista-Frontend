const RoomCard = ({roomImg, title, price}) => {
  return (
    <div className="card item">
      <img src={roomImg} className="img-fluid" alt="item" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <div className="d-flex justify-content-between">
          <p className="card-text fs-min">
            S/. <span>{price.toFixed(2)}</span> / Noche
          </p>
          <a className="card-link fs-min">Ver detalle</a>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
