import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'umi'
import styles from './index.less';

export default function Home() {
  const { base, home: { overview }} = useSelector(state => ({ base: state.base, home: state.home}))
  const dispath = useDispatch()

  console.log('base', base);
  console.log('home', overview);

  useEffect(() => {
    dispath({
      type: 'home/getOverview',
      payload: {},
    })
  }, [])

  return (
    <div>
      <h1 className={styles.title}>UserInfo</h1>
      <p>姓名：{base?.userName}</p>
      <p>性别：{base?.userGender}</p>
      <p>年纪：{base?.userAge}</p>
      <h1 className={styles.title}>我的部署任务</h1>
      <p>数据集数量：{overview?.datasetNum}</p>
      <p>项目数量：{overview?.projectNum}</p>
      <p>模型数量：{overview?.modelNum}</p>
      <p>部署数量：{overview?.deploymentNum}</p>
    </div>
  );
}
