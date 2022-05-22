const x = [{ name: 'XD', additionalInfos: 'ROLF' }];

const ItemGallery = ({ itemList = x, title = 'lolo' }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="columns">
        {itemList.map((item, index) => {
          const { name, link, additionalInfos } = item;
          return (
            <div className="column is-3" key={index}>
              <div className="card">
                {/* <div className="card-image">
            <figure className="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </div> */}
                <div className="card-content">
                  <p className="title is-4">{name}</p>

                  <div className="content">
                    {additionalInfos}
                    <a href="#">
                      <img
                        src="src/icons/githubIcon.svg"
                        alt="The github octocat"
                      />
                    </a>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemGallery;
