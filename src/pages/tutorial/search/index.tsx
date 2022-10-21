import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { useRequest } from 'ahooks';
import { greeting } from '@/pages/tutorial/search/service';
import { Button } from 'antd';

export default () => {
  const { loading, data, run } = useRequest(greeting, {
    loadingDelay: 500,
  });
  return (
    <PageContainer>
      <ProCard
        title={<div className={'ml-4 font-bold'}>search result</div>}
        loading={loading}
        headerBordered
        bordered
        ghost
        layout={'center'}
        direction={'column'}
        extra={
          <Button className={'w-24 mr-4'} type={'primary'} onClick={run}>
            Refresh
          </Button>
        }
      >
        <div className={'flex container justify-center shadow-lg'}>
          <div className={'text-2xl font-bold m-4'}>{data}</div>
        </div>
      </ProCard>
    </PageContainer>
  );
};
