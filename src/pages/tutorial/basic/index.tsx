import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { Button, message } from 'antd';
import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';
import { useState } from 'react';

export default () => {
  const [collapsed, { toggle }] = useBoolean(false);
  const [data, setData] = useState<string>();
  return (
    <PageContainer>
      <ProCard
        data-theme="cupcake"
        title={<span className={'font-bold mx-4'}>basic layout</span>}
        className={'shadow'}
        ghost
        headerBordered
        layout={'center'}
        direction={'column'}
        gutter={[8, 0]}
        collapsed={collapsed}
        extra={
          <Button className={'w-32 mx-4'} type={'primary'} onClick={toggle}>
            {collapsed ? <LeftOutlined /> : <DownOutlined />}收起/展开
          </Button>
        }
      >
        <div className={'text-blue-500 hover:text-blue-800 text-2xl font-bold mt-4'}>content</div>
        <div className={'container flex justify-evenly space-x-4 mb-4'}>
          <Button className={'w-24'} type={'primary'} onClick={() => message.info('clicked')}>
            Click
          </Button>
          <Button className={'w-24'} onClick={() => message.info('submitted')}>
            Submit
          </Button>
        </div>
        <div className={'mb-2'}>
          <div className="p-10 card bg-base-200 space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input"
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <div>{data}</div>
          </div>
        </div>
      </ProCard>
    </PageContainer>
  );
};
