import { CardIUX } from './styled';

function CardUs({ photo, info, title, subtitle, job, social_git, social_link, img, QR }) {
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
                                <h4 className="card-title">{job}</h4>
                                <p className="card-text">{subtitle}</p>
                                <h6 className="card-title">{social_git}</h6>
                                <h6 className="card-title">{social_link}</h6>

                                <img className="card-qr-social" src={QR}
                                    alt={info} />

                                <h6 className="card-title">{img}</h6>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardIUX>
    );
}
export default CardUs;