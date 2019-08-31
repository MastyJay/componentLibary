import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './index.css';
import Text from '@/components/Text';

@connect(({ userInfo }) => ({
  userInfo
}))
class UserCenter extends Component {

  render() {
    const { userInfo = { name='mastyjay' } } = this.props;
    return (
      <div className={styles.normal} >
        <h1>I am a umi block!</h1>
        <Text text="啦啦啦啦" />
        <Text text={userInfo.name} />
      </div>
    );
  }
}

export default UserCenter;
