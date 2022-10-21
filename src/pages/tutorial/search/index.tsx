import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { useRequest } from 'ahooks';
import { greeting, index } from '@/pages/tutorial/search/service';
import { Button, Input } from 'antd';

export default () => {
  const {
    loading: isSearching,
    data: searchResult,
    run: search,
  } = useRequest(index, {
    loadingDelay: 500,
  });

  const {
    loading: isGreeting,
    data: greetResult,
    run: greet,
  } = useRequest(greeting, {
    loadingDelay: 500,
    manual: true,
  });

  return (
    <PageContainer>
      <div className={'container space-y-2'}>
        <ProCard
          title={<div className={'ml-4 font-bold'}>search result</div>}
          loading={isSearching}
          headerBordered
          bordered
          ghost
          layout={'center'}
          direction={'column'}
          extra={
            <Button className={'w-24 mr-4'} type={'primary'} onClick={search}>
              Refresh
            </Button>
          }
        >
          <div className={'flex container justify-center shadow-lg'}>
            <div className={'text-2xl font-bold m-4'}>{searchResult}</div>
          </div>
        </ProCard>
        <ProCard
          title={<div className={'ml-4 font-bold'}>greeting result</div>}
          loading={isGreeting}
          headerBordered
          bordered
          ghost
          layout={'center'}
          direction={'column'}
        >
          <Input.Search
            className={'px-4 w-1/2'}
            placeholder={'input'}
            enterButton={'Search'}
            onSearch={(value) => {
              greet({ name: value });
            }}
          />
          <div className={'flex container justify-center shadow-lg'}>
            <div className={'text-2xl font-bold m-4'}>{greetResult}</div>
          </div>
        </ProCard>
      </div>
    </PageContainer>
  );
};
