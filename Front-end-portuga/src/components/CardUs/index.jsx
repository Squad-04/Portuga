import {CardIUX} from './styled';

function CardUs({ photo, info, title, subtitle }) {
    return (
        <CardIUX>
            <div className="container">
                <div className="linha">
                    <div className=" mt-2">
                        <div className="card">
                            <img className="card-img-top" src={photo}
                                alt={info} />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardIUX>
    );
}

export default CardUs;