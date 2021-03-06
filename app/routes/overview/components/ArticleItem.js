// @flow

import React, { Component } from 'react';
import type { Event, Article } from 'app/models';
import { Image } from 'app/components/Image';
import truncateString from 'app/utils/truncateString';
import { Flex } from 'app/components/Layout';
import { Link } from 'react-router';
import styles from './ArticleItem.css';

type Props = {
  item: Event | Article,
  url: string,
  meta: Object
};

class ArticleItem extends Component<Props, *> {
  render() {
    const { item, url, meta } = this.props;
    const TITLE_MAX_LENGTH = 40;
    const DESC_MAX_LENGTH = 230;

    return (
      <div className={styles.body}>
        <Flex column>
          <Flex column>
            <Link to={url} className={styles.link}>
              <Image className={styles.image} src={item.cover} />
              <div className={styles.infoWrapper}>
                <h2 className={styles.articleTitle}>
                  {truncateString(item.title, TITLE_MAX_LENGTH)}
                </h2>
                <span className={styles.articleMeta}>
                  Publisert - {meta.props.children[0]}
                </span>
                <p className={styles.articleMeta}>{meta.props.children[3]}</p>
              </div>
              <p className={styles.articleDescription}>
                {truncateString(item.description, DESC_MAX_LENGTH)}
              </p>
            </Link>
          </Flex>
        </Flex>
      </div>
    );
  }
}

export default ArticleItem;
