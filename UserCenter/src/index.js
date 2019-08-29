import React from 'react';
import styles from './index.css';
import Text from '@/components/Text';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>I am a umi block!</h1>
      <Text text="啦啦啦啦" />
    </div>
  );
}
