import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { useRequest } from 'ahooks';
import { greeting, index } from '@/pages/tutorial/search/service';
import { Button, Input, Tabs } from 'antd';

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
      <ProCard ghost gutter={[8, 8]}>
        <ProCard layout={'center'} colSpan={12} className={'h-32'}>
          <Button.Group>
            <Button className={'hover:bg-blue-500 hover:text-white'}>First</Button>
            <Button className={'hover:bg-blue-500 hover:text-white'}>Second</Button>
            <Button className={'hover:bg-blue-500 hover:text-white'}>Last</Button>
          </Button.Group>
        </ProCard>
        <ProCard layout={'center'} colSpan={12} className={'h-32'}>
          <Tabs>
            <Tabs.TabPane tab="项目 1" key="item-1">
              内容 1
            </Tabs.TabPane>
            <Tabs.TabPane tab="项目 2" key="item-2">
              内容2
            </Tabs.TabPane>
          </Tabs>
        </ProCard>
      </ProCard>
      <div className={' space-y-2 mt-4'}>
        <ProCard
          title={<div className={'ml-4 font-bold'}>search result</div>}
          loading={isSearching}
          bordered
          layout={'center'}
          direction={'column'}
          extra={
            <Button className={'w-24 mr-4'} type={'primary'} onClick={search}>
              Refresh
            </Button>
          }
        >
          <div className={'flex container justify-center'}>
            <div className={'text-2xl font-bold m-4'}>{searchResult}</div>
          </div>
        </ProCard>
        <ProCard
          title={<div className={'ml-4 font-bold'}>greeting result</div>}
          loading={isGreeting}
          bordered
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
          <div className={'flex container justify-center'}>
            <div className={'text-2xl font-bold m-4'}>{greetResult}</div>
          </div>
        </ProCard>
      </div>
    </PageContainer>
  );
};
