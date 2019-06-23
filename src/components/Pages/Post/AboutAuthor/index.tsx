import * as React from 'react';
import { TwitterFollowButton } from 'react-twitter-embed';
import Link from 'gatsby-link';

import styles from './index.module.scss';
import { TO_ABOUT_ME } from 'routes/path';

interface PostAboutAuthorProps {
  authorInfo: AuthorInfo;
  authorProfilePictureSrc: string;
}

export default function PostAboutAuthor({ authorInfo, authorProfilePictureSrc }: PostAboutAuthorProps) {
  return (
    <div className={styles.aboutAuthor}>
      <div className={styles.profilePicture}>
        <img src={authorProfilePictureSrc} alt={authorInfo.name} />
      </div>
      <div className={styles.authorInfo}>
        <h4>About the author</h4>
        <div className={styles.description}>
          {authorInfo.description} <Link to={TO_ABOUT_ME()}>Read more</Link>
        </div>
        <TwitterFollowButton screenName={authorInfo.nicknames.twitter} />
      </div>
    </div>
  );
}