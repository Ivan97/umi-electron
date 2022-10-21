import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { Card, Input, Tabs } from 'antd';
import React, { useState } from 'react';
import styles from './index.less';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import ProForm, { ProFormDatePicker, ProFormText, QueryFilter } from '@ant-design/pro-form';

const { TabPane } = Tabs;

type AdvancedSearchProps = {
  onFilterChange?: (allValues: any) => void;
  onSearch?: (text: string) => void;
  onTypeChange?: (type: string) => void;
  defaultType?: string;
};

const AdvancedSearch: React.FC<AdvancedSearchProps> = (props) => {
  const { onSearch, onTypeChange, defaultType = 'articles', onFilterChange } = props;
  const [searchText, setSearchText] = useState<string>();
  const [showFilter, setShowFilter] = useState(false);
  const quickSearch = ['小程序开发', '入驻', 'ISV 权限'];
  return (
    <Card bodyStyle={{ paddingBottom: 0 }} className={showFilter ? '' : styles.hiddenFilter}>
      <div>
        <Input.Search
          placeholder={'请输入'}
          enterButton={'搜索'}
          size={'large'}
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onSearch={onSearch}
          style={{ maxWidth: 522, width: '100%' }}
        />
        <div className={styles.quickSearch}>
          {quickSearch.map((text) => (
            <span
              key={text}
              onClick={() => {
                setSearchText(text);
                if (onSearch) {
                  onSearch(text);
                }
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
      <Tabs
        defaultActiveKey={defaultType}
        onChange={onTypeChange}
        tabBarExtraContent={
          <a
            className={styles.selfTrigger}
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            高级筛选 {showFilter ? <UpOutlined /> : <DownOutlined />}
          </a>
        }
      >
        <TabPane tab="文章" key="articles" />
        <TabPane tab="项目" key="projects" />
        <TabPane tab="应用" key="applications" />
      </Tabs>
      <QueryFilter
        submitter={false}
        span={24}
        labelWidth="auto"
        split
        onChange={onFilterChange}
        className={styles.filter}
      >
        <ProForm.Group title={'姓名'}>
          <ProFormText name={'name'} />
        </ProForm.Group>
        <ProForm.Group title={'详情'}>
          <ProFormText name={'age'} label={'年龄'} />
          <ProFormDatePicker name={'birth'} label={'生日'} />
        </ProForm.Group>
      </QueryFilter>
    </Card>
  );
};

export default () => {
  return (
    <PageContainer>
      <ProCard ghost layout={'center'} direction={'row'}>
        <div className={'container flex justify-center'}>
          <div className={'w-1/3 flex h-28 justify-center items-start'}>
            <div
              className={
                'flex h-full items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 text-3xl font-extrabold'
              }
            >
              hello world
            </div>
          </div>
          <div className={'w-2/3'}>
            <AdvancedSearch
              onSearch={(values) => {
                console.log(values);
              }}
            />
          </div>
        </div>
      </ProCard>
    </PageContainer>
  );
};
