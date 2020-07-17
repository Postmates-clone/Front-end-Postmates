import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Media from '../../Style/Media';
import { setPage } from '../../Modules/MainReducer';

const ErrorBlock = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 72px);
  color: rgb(45, 49, 56);
  background-color: rgb(251, 208, 69);
`;
const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;

  margin: 0 auto;
  padding: 30px 0 0 0;
`;
const MainMessage = styled.div`
  position: relative;
  width: 670px;
  margin: 0 auto;

  ${Media.mobile`
    width: 100%;
  `}
`;
const Title = styled.div`
  padding: 40px 0 0 0;
  font-size: 320px;
  font-weight: bold;
  text-align: center;

  ${Media.mobile`
    font-size: 170px;
  `}
`;
const Image = styled.div`
  position: absolute;
  top: 27px;
  left: 124px;
  width: 392px;
  height: 350px;

  background-image: url('https://buyer-static-gcp.postmates.com/dist/prod/404-image@2x.772cea069bcbfc170e74e96ad95ded3db03871728bd900a1aecd7e2b4fe3201b598784e78c45a43bda52252e3c17ae07a73265d5f3d9e642eb89f84348e6f412.png');
  background-position: center center;
  background-size: contain;

  /* opacity: 1;
  transition: opacity 300ms ease-in-out 0s; */
  ${Media.mobile`
    width: 200px;
    height: 180px;
    left: calc(50% - 100px);
  `}
`;
const Description = styled.div`
  width: 60%;
  margin: 30px 0 0 0;

  line-height: 1.6;

  text-align: center;

  * {
    display: block;
  }

  strong {
    font-size: 26px;
    font-weight: bold;
    letter-spacing: -1.6px;
  }

  em {
    font-size: 18px;
    font-weight: 200;
    letter-spacing: -0.3px;
  }
`;
const GoMainBtn = styled.button`
  margin: 30px 0 0 0;
  background-color: transparent;
  color: rgb(45, 49, 56);
  border-radius: 28px;
  width: 156px;
  min-height: 56px;
  height: 56px;
  border: 1px solid rgb(45, 49, 56);
  letter-spacing: 0.72px;
  font-size: 12px;
  font-weight: bold;
  outline: currentcolor none medium;
`;

const Error404 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage('error'));
  }, [dispatch]);

  return (
    <ErrorBlock dispatch={dispatch}>
      <ErrorWrapper>
        <MainMessage>
          <Title>404</Title>
          <Image />
        </MainMessage>
        <Description>
          <strong>Oops. There’s nothing here.</strong>
          <em>
            The page no longer exists or the link may be broken. But don’t
            worry, you can always return from whence you came.
          </em>
        </Description>
        <Link to="/">
          <GoMainBtn>GO TO HOMEPAGE</GoMainBtn>
        </Link>
      </ErrorWrapper>
    </ErrorBlock>
  );
};

export default Error404;
