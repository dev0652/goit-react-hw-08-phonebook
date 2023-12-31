import React from 'react';
import logo from 'images/project3.png';
import { HomeImage, HomeText, Wrapper } from './Home.styled';

export default function Home() {
  return (
    <Wrapper>
      <h1>Welcome to EasyContacts!</h1>

      <HomeText>
        EasyContacts is a simple and secure app that lets you create, manage and
        access your contacts with piece of mind without fear of being tracked by
        the Evil Corporation.
      </HomeText>

      <HomeImage
        src={logo}
        alt="UI Design 3D Illustration"

        // src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8625109287767.5fd08439c7676.jpg"
        // srcSet="https://mir-s3-cdn-cf.behance.net/project_modules/disp/aa8625109287767.5fd08439c7676.jpg 600w, https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aa8625109287767.5fd08439c7676.jpg 1200w, https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/aa8625109287767.5fd08439c7676.jpg 1400w, https://mir-s3-cdn-cf.behance.net/project_modules/fs/aa8625109287767.5fd08439c7676.jpg 1920w, https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/aa8625109287767.5fd08439c7676.jpg 2800w"
        // sizes="(max-width: 2800px) 100vw, 2800px"
        // alt="UI Design 3D Illustration"
      />
    </Wrapper>
  );
}
