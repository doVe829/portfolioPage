import '../styles/ItemGallery.scss';
import { ReactComponent as GithubIcon } from '../icons/githubIcon.svg';
import IconComponent from './IconComponent';
const x = [{ name: 'XD', additionalInfos: 'ROLF' }];

const ItemGallery = ({ itemList = x, title = 'lolo' }) => {
  return (
    <div className="mt-5">
      <h2 className="mb-3">{title}</h2>
      <div className="columns">
        {itemList.map((item, index) => {
          const { name, link, additionalInfos, stack } = item;
          return (
            <div className="column" key={index}>
              <div className="card cardEqualHeight">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <IconComponent stackName={stack} />
                    <img
                      src="https://bulma.io/images/placeholders/1280x960.png"
                      alt="Placeholder image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="columns">
                    <div className="column title has-text-centered">{name}</div>
                  </div>

                  <div className="content">
                    <div className="infoBox">{additionalInfos}</div>
                    <a className="githubLink" href="#">
                      <div className="mt-5 link columns">
                        <GithubIcon className="pt-2 column is-2" />
                        <span className="column is-10">Check on github</span>
                      </div>
                    </a>
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
