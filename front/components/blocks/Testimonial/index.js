import delve from 'dlv';

import { getStrapiMedia } from '../../../utils';

const Testimonial = ({ theme, text, author }) => {
  return (
    <div className="bg-white pt-60 pb-60 px-4">
      <div className="bg-gray-700 md:w-2/4 mx-auto p-20 rounded-full">
        {text && (
          <p className="text-white w-full md:w-2/3 m-auto text-center text-md md:text-3xl">
            <span className={`font-bold text-${theme}`}>“</span>
            {text}
            <span className={`font-bold text-${theme}`}>”</span>
          </p>
        )}

        {author && (
          <div className="flex items-center justify-center mt-8">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src={getStrapiMedia(
                  delve(author, 'picture.formats.thumbnail.url')
                )}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>

            <div className="flex ml-2 items-center justify-center">
              <span
                className={`font-semibold text-${theme} mr-2 text-md md:text-lg`}
              >
                {delve(author, 'username')}
              </span>
              <span className="text-gray-400 text-xs md:text-xl font-light">
                /
              </span>
              <span className="text-gray-400 text-xs md:text-xl ml-2">
                {delve(author, 'job')}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Testimonial.defaultProps = {};

export default Testimonial;