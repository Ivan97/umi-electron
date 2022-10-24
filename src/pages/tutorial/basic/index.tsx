import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { Button, message } from 'antd';
import { DownOutlined, LeftOutlined } from '@ant-design/icons';
import { useBoolean } from 'ahooks';

export default () => {
  const [collapsed, { toggle }] = useBoolean(false);
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
      </ProCard>
    </PageContainer>
  );
};
