import cardImg from '../images/2a4a4157-17edit---copy.jpg';

function Cards() {
    return (
        <div className = "contents">
            <div className = "wrapper">
                <h2>Our Services</h2>
                
                <div className="tiles">
                    <div className="tile">
                        <img src={cardImg} alt="" className="tile__image"/>
                        <div className="tile__content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="tile">
                        <img src={cardImg} alt="" className="tile__image"/>
                        <div className="tile__content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="tile">
                        <img src={cardImg} alt="" className="tile__image"/>
                        <div className="tile__content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="tile">
                        <img src={cardImg} alt="" className="tile__image"/>
                        <div className="tile__content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="tile">
                        <img src={cardImg} alt="" className="tile__image"/>
                        <div className="tile__content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="tile">
                        <img src={cardImg} alt="" className="tile__image"/>
                        <div className="tile__content">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cards;