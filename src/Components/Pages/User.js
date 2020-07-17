import React, { useState } from 'react';
import styled from 'styled-components';
import Media from '../../Style/Media';
import UserHeader from '../Items/UserHeader';

const AccountBlock = styled.main``;

const Wrapper = styled.div`
  display: flex;

  padding: 40px 36px;
  margin: 0 auto;

  * {
    color: rgb(45, 49, 56);
  }

  ${Media.desktop`
  flex-direction: row;
  width: 1024px;
  `}

  ${Media.tablet`
  flex-direction: column;
  width: 100%;
  `}

  ${Media.mobile`
  flex-direction: column;
  width: 100%;
  `}
`;

const UserPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 77px 60px 0;
`;
// const defaultimg =
//   'https://buyer-static-gcp.postmates.com/dist/prod/c9d079062d2818a9aed8103c020f54ec.svg';

const UserImage = styled.div`
  width: 80px;
  height: 80px;
  margin: 20px 0;
  border-radius: 45px;
  border: 1px dashed rgb(217, 219, 224);

  background-color: rgb(236, 237, 239);
  background-image: url(${(props) => props.imgurl || null});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;
const ChangePhoto = styled.button`
  position: relative;

  display: inline-block;
  min-width: 86px;
  width: 150px;
  height: 38px;

  margin: 0 0 0 0;
  padding: 0 5px;

  border: 1px solid rgba(217, 219, 224, 0.5);
  border-radius: 28px;

  color: #fff;
  background-color: transparent;
  svg {
    margin: 5px 0 0 0;
  }
  span {
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.72px;
    line-height: 36px;
  }
`;
const UploadPhoto = styled.input`
  position: absolute;
  top: 0;
  left: 0;

  width: 160px;
  height: 40px;

  opacity: 0;

  cursor: pointer;
`;
const UserName = styled.div`
  margin: 0 0 20px 0;
  
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.16px;

  ${Media.desktop`
  display: none;
  `}

  ${Media.tablet`
  display: block;
  `}

  ${Media.mobile`
  display: block;
  `}
`;

const AccountInfo = styled.div`
  width: 100%;
`;

const InfoSection = styled.div`
  margin: 0 0 32px 0;
`;

const AccountCategory = styled.h3`
  width: 100%;
  padding: 0 0 20px 0;
  border-bottom: 1px solid rgba(217, 219, 224, 0.5);

  font-size: 21px;
  font-weight: bold;
  letter-spacing: -0.88px;
`;

const AccountDetail = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px 0 22px 0;

  border-bottom: 1px solid rgba(217, 219, 224, 0.5);
`;

const EditInput = styled.input`
  background-color: #fff;
  border: 0px;
  outline: none;

  font-size: 16px;
  font-weight: 400;
  letter-spacing: -0.28px;

  cursor: pointer;
`;

const EditBtn = styled.button`
  background-color: #fff;
  border: 0px;
  outline: none;

  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.72px;
`;

const User = ({ user }) => {
  const [imgurl, setImgurl] = useState('');

  const uploadPhoto = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => setImgurl(reader.result), false);
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <AccountBlock>
      <UserHeader title="Account" />
      <Wrapper>
        <UserPhoto>
          <UserImage imgurl={imgurl} />
          <UserName>{user.username}</UserName>
          <ChangePhoto>
            <svg width="25" height="19">
              <defs>
                <path
                  id="icon-camera-plus_svg__a"
                  d="M3 7h18v12H3V7zm9 2a4 4 0 100 8 4 4 0 000-8zm0 1a3 3 0 110 6 3 3 0 010-6zM7 4h10v2H7V4z"
                />
              </defs>
              <g fill="none" fillRule="evenodd">
                <g transform="translate(-3)">
                  <mask id="icon-camera-plus_svg__b" fill="#fff">
                    <use xlinkHref="#icon-camera-plus_svg__a" />
                  </mask>
                  <use fill="#222" xlinkHref="#icon-camera-plus_svg__a" />
                  <g fill="#222" mask="url(#icon-camera-plus_svg__b)">
                    <path d="M0 0h24v24H0z" />
                  </g>
                </g>
                <path fill="#222" d="M17 3h8v2h-8z" />
                <path fill="#222" d="M22 0v8h-2V0z" />
              </g>
            </svg>
            <span>CHANGE PHOTO</span>
            <UploadPhoto
              type="file"
              onChange={(e) => uploadPhoto(e.target.files[0])}
            />
          </ChangePhoto>
        </UserPhoto>
        <AccountInfo>
          <InfoSection>
            <AccountCategory>Account Details</AccountCategory>
            <AccountDetail>
              <EditInput value={user.username} />
              <EditBtn>EDIT</EditBtn>
            </AccountDetail>
            <AccountDetail>
              <EditInput value={user.phone} />
              <EditBtn>EDIT</EditBtn>
            </AccountDetail>
          </InfoSection>
          <InfoSection>
            <AccountCategory>Profiles</AccountCategory>
            <AccountDetail>{user.email}</AccountDetail>
          </InfoSection>
          <InfoSection>
            <AccountCategory>Addresses</AccountCategory>
            <AccountDetail>{user.address}</AccountDetail>
          </InfoSection>
          <InfoSection>
            <AccountCategory>Payment</AccountCategory>
            <AccountDetail>credit card number</AccountDetail>
          </InfoSection>
          <InfoSection>
            <AccountCategory>Postmates Unlimited</AccountCategory>
            <AccountDetail>Status</AccountDetail>
          </InfoSection>
        </AccountInfo>
      </Wrapper>
    </AccountBlock>
  );
};

export default User;
