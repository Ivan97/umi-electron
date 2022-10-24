import { PageContainer } from '@ant-design/pro-layout';
import ProCard from '@ant-design/pro-card';
import { Button, Divider, Space, Statistic, Steps } from 'antd';
import { useState } from 'react';

const { Step } = Steps;

const steps = ['填写基本信息', '配置模板', '配置访问', '配置部署和调度', '预览'];

export default () => {
  const [current, setCurrent] = useState(0);
  return (
    <PageContainer>
      <ProCard
        title={'Daisy'}
        className={'space-y-4'}
        layout={'center'}
        direction={'row'}
        gutter={[8, 8]}
        wrap={true}
      >
        <ProCard bordered={true} colSpan={12}>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">new</span>
            <Button className={'w-20'} type={'primary'}>
              click
            </Button>
          </div>
        </ProCard>
        <ProCard bordered={true} colSpan={12}>
          <div className="tabs">
            <a className="tab tab-lifted indicator tab-active">
              Messages
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 animate-spin-ease-in-out"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <span className="indicator-item animate-pulse badge">6</span>
            </a>
            <a className="indicator tab tab-lifted ">
              Notifications
              <span className="indicator-item badge">8</span>
            </a>
            <a className="tab tab-lifted">Requests</a>
          </div>
        </ProCard>
        <ProCard bordered={true} colSpan={12}>
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">new</span>
            <Button className={'w-20'} type={'primary'}>
              click
            </Button>
          </div>
        </ProCard>
        <ProCard bordered={true} colSpan={12}>
          <div className="tabs">
            <a className="tab tab-lifted">Messages</a>
            <a className="indicator tab tab-lifted tab-active">
              Notifications
              <span className="indicator-item badge">8</span>
            </a>
            <a className="tab tab-lifted">Requests</a>
          </div>
        </ProCard>
        <ProCard.Group title="核心指标" direction={'row'}>
          <ProCard>
            <Statistic title="今日UV" value={79.0} precision={2} />
          </ProCard>
          <Divider type={'vertical'} />
          <ProCard>
            <Statistic title="冻结金额" value={112893.1234} precision={2} />
          </ProCard>
          <Divider type={'vertical'} />
          <ProCard>
            <Statistic title="信息完整度" value={93} suffix="/ 100" />
          </ProCard>
          <Divider type={'vertical'} />
          <ProCard>
            <Statistic title="冻结金额" value={112893.0} />
          </ProCard>
        </ProCard.Group>
        <ProCard split={'vertical'} bordered style={{ height: 320 }}>
          <ProCard colSpan={6}>
            <Steps direction={'vertical'} size="small" current={current} style={{ height: '100%' }}>
              {steps.map((step) => (
                <Step title={step} />
              ))}
            </Steps>
          </ProCard>
          <ProCard title="流量占用情况" colSpan={18} direction={'row'}>
            <div>{current === steps.length ? 'Done' : steps[current]}</div>
            <Space>
              <Button
                key="primary"
                type="primary"
                onClick={() => setCurrent(current + 1)}
                disabled={current === steps.length}
              >
                下一步
              </Button>
              <Button key="pre" onClick={() => setCurrent(current - 1)} disabled={current === 0}>
                上一步
              </Button>
            </Space>
          </ProCard>
        </ProCard>
        <ProCard>
          <div className="indicator">
            <div className="indicator-item indicator-bottom">
              <button className="btn btn-primary">Apply</button>
            </div>
            <div className="card border">
              <div className="card-body">
                <h2 className="card-title">Job Title</h2>
                <p>Rerum reiciendis beatae tenetur excepturi</p>
              </div>
            </div>
          </div>
        </ProCard>
        <ProCard>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-wide btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </ProCard>
        <ProCard>
          <label htmlFor="my-modal-6" className="btn modal-button">
            open modal
          </label>
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
              <p className="py-4">
                You've been selected for a chance to get one year of subscription to use Wikipedia
                for free!
              </p>
              <div className="stack">
                <div className="grid w-32 h-20 rounded bg-primary text-primary-content place-content-center">
                  1
                </div>
                <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">
                  2
                </div>
                <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
                  3
                </div>
              </div>
              <span className={'badge badge-success'}>Success</span>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">
                  Yay!
                </label>
              </div>
            </div>
          </div>
        </ProCard>
      </ProCard>
    </PageContainer>
  );
};
