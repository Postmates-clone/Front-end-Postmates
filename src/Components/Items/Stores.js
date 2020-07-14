/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Media from '../../Style/Media';

const Store = styled.li`

  margin: 0 10px 0 0;

  cursor: pointer;

  * {
    line-height: 1.6;
  }
  h3 {
    font-size: 16px;
    font-weight: bold;
  }
  svg {
    margin: 0 0 0 7px;
  }
  strong {
    margin-right: 3px;
    color: #00CC99;

    font-size: 14px;
    font-weight: 400;
  }
  em {
    color: #8F95A3;
    font-size: 14px;
    font-weight: 200;
  }

  ${Media.desktop`
  flex: 0 0 calc(33.3% - 24px);
  `}
  ${Media.tablet`
  flex: 0 0 calc(50% - 12px);
  `}
  ${Media.mobile`
  flex: 0 0 calc(100% - 32px);
  `}
`;

const StoreImage = styled.div`
  width: 100%;
  padding-top: 65%;
  margin-bottom: 15px;
  background-color: #f4f4f4;

  background-image: url(${(props) => props.image || null});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export default function Stores({ name, image, fee, time, url }) {
  // console.log(id, name, image, fee, time, url);
  const imgRef = useRef(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    function loadImage() {
      setIsLoad(true);
    }

    const img = imgRef.current;
    img && img.addEventListener(loadImageEvent, loadImage);

    return () => {
      img && img.removeEventListener(loadImageEvent, loadImage);
    };
  }, []);

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(onIntersection, {
        threshold: 0.5,
      });
    }
    imgRef.current && observer.observe(imgRef.current);
  }, []);

  return (
    <Store>
      <Link to={`/item/${url}`}>
        <StoreImage ref={imgRef} image={isLoad ? image : null} />
        <h3>
          {name}
          <svg width="14" height="14" viewBox="0 0 14 14">
            <g fill="none" fillRule="evenodd">
              <rect fill="#0C9" width="14" height="14" rx="7" />
              <path fill="#FFF" d="M3 7l3 3 4.5-4.5-1-1L6 8 4 6" />
            </g>
          </svg>
        </h3>
        <strong>${fee} Delivery</strong>
        <em> · {time} min</em>
      </Link>
    </Store>
  );
}

let observer = null;
const loadImageEvent = 'loadImage';

function onIntersection(entries, io) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target);
      entry.target.dispatchEvent(new CustomEvent(loadImageEvent));
    }
  });
}
