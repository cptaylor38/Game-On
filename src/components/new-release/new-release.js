import React from 'react';
import "./new-release.css";

export default class Carousel extends React.Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid carousel-img" src="https://s3.amazonaws.com/prod-media.gameinformer.com/styles/full/s3/2018/11/06/6f4a579a/banner.jpg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid carousel-img" src="https://cdn.mos.cms.futurecdn.net/QfcTj8VRkptS39MFTmBA2d.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid carousel-img" src="https://135525-391882-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/05/Mario-Kart-Tour-.jpg" alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid carousel-img" src="https://hb.imgix.net/fc928fb1598350a80355ad1eefe8036c1540d540.jpg?auto=compress,format&fit=crop&h=353&w=616&s=ce2bd2a9123d295720878821d329dfbc" alt="Fourth slide"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

