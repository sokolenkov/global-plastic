import Image from 'next/image';

import { urlForImage } from 'lib/sanity';

const SponsorsSection = ({ data: { sponsorsTitle, sponsorsImages } }) => {
  return (
    <section className="spection">
      <h2 className="spection__title">{sponsorsTitle}</h2>
      <ul className="spection__sponsors">
        {sponsorsImages?.length ? (
          sponsorsImages.map((img, idx) => {
            return (
              <li className="spection__sponsors-item" key={idx}>
                <Image
                  className="spection__sponsors-item__img"
                  src={urlForImage(img).fit('crop').url()}
                  layout="responsive"
                  width={160}
                  height={65}
                  objectFit="contain"
                  alt="img"
                />
              </li>
            );
          })
        ) : (
          <li>There is no items yet. Start to add in admin page :)</li>
        )}
      </ul>
    </section>
  );
};

export default SponsorsSection;
