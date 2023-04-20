import ClayCard from '@clayui/card';
import React, { useState } from 'react';
const spritemap = "icons.svg";
const ImageCard= (props) => {
        const [active, setActive] = useState(false); 
        return (
          <div className="col-md-6">
            <ClayCard displayType="file">
              <ClayCard.AspectRatio className="card-item-first">
                <div className="aspect-ratio-item aspect-ratio-item-center-middle aspect-ratio-item-fluid card-type-asset-icon">
                <img
                 alt="thumbnail"
                 className="card-item-first"
                 src={"http://localhost:8080"+props.value.contentUrl}
                 style={{ height: "10rem",objectFit:"contain" }}
                />
                </div>
              </ClayCard.AspectRatio>
              <ClayCard.Body>
                <ClayCard.Row>
                  <div className="autofit-col autofit-col-expand">
                    <section className="autofit-section">
                      <ClayCard.Description displayType="title">
                        {props.value.title}
                      </ClayCard.Description>
                      <ClayCard.Description displayType="subtitle">
                      
                      </ClayCard.Description>
                      <ClayCard.Caption>
                        {/* <ClayLabel displayType="success">{"Approved"}</ClayLabel> */}
                      </ClayCard.Caption>
                    </section>
                  </div>
                </ClayCard.Row>
              </ClayCard.Body>
            </ClayCard>
          </div>
        );
};

export default ImageCard;