import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Brands.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import BrandsSlider from '../../features/BrandsSlider/BrandsSlider';

const Brands = ({ brands }) => {
  const [brand] = useState(6);
  const [activePage] = useState(0);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div
          className={
            'row no-gutters justify-content-between ' + styles.topnbottSliderWrapper
          }
        >
          <div className={`col-1`}>
            <Button className={styles.button} variant='carousel'>
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </Button>
          </div>
          <div className='col-10'>
            <div className='row justify-content-between'>
              {brands.slice(activePage * brand, (activePage + 1) * brand).map(item => (
                <div key={item.id} className='col-2'>
                  <BrandsSlider {...item} />
                </div>
              ))}
            </div>
          </div>
          <div className={`col-1`}>
            <Button className={styles.button} variant='carousel'>
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Brands.propTypes = {
  brands: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

Brands.defaultProps = {
  brands: [],
};

export default Brands;