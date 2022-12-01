import React, { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { geoSearch } from '@/pages/tutorial/geo/service';
import { Input } from 'antd';

const SIDEWALK_LABS = 'https://s2.sidewalklabs.com/regioncoverer/';

const { Search } = Input;

type GeoAppProps = {};

const GeoApp: React.FC<GeoAppProps> = (props: GeoAppProps) => {
  const { loading, data, run } = useRequest(geoSearch, {
    manual: true,
    loadingDelay: 500,
  });
  const [url, setUrl] = useState<string>(SIDEWALK_LABS);
  useEffect(() => {
    if (data) {
      setUrl(`${SIDEWALK_LABS}?center=${data.center}&cells=${data.cells}&zoom=10`);
    }
  }, [data]);
  return (
    <>
      <Search
        allowClear
        loading={loading}
        onSearch={(value) =>
          run({
            name: value,
          })
        }
      />
      <iframe
        src={url}
        style={{
          border: '0px',
          width: '100%',
          height: '100%',
        }}
      />
    </>
  );
};

export default GeoApp;
