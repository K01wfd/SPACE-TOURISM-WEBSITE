import React from 'react';

function Destination(props) {
  const {
    imagePng,
    imageWebp,
    title,
    details,
    metaDistance,
    metaTime,
    tabIndex,
    id,
  } = props;
  return (
    <>
      <picture>
        <source media='(max-width: 870px)' srcSet={imagePng} type='image/png' />
        <source
          media='(min-width: 871px)'
          srcSet={imageWebp}
          type='image/webp'
        />

        <img src={imagePng} alt='the moon' />
      </picture>

      <article
        className='destination-info flow-y flow-y--small'
        id={`${id}-tab`}
        tabIndex={tabIndex}
        role='tabpanel'
      >
        <h2 className='fs-800 uppercase ff-serif '>{title}</h2>
        <p className='text-accent'>{details}</p>
        <div className='hr-dest'></div>
        <div className='destination-meta d-flex '>
          <div>
            <h3 className='text-accent fs-200 uppercase'>Avg. distance</h3>
            <p className='ff-serif uppercase'>{metaDistance}</p>
          </div>

          <div>
            <h3 className='text-accent fs-200 uppercase'>Est. travel time</h3>
            <p className='ff-serif uppercase'>{metaTime}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Destination;
