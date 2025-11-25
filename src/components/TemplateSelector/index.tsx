import React from 'react';
import { ReactSVG } from 'react-svg';
import cx from 'classnames';
import { useIntl } from 'react-intl';
import { getSearchObj } from '@/helpers/location';
import './index.less';

type TemplateItem = {
  url: string;
  id: string;
  description: string;
  disabled?: boolean;
};

const TEMPLATES: TemplateItem[] = [
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/GLDkiGBSPl/moban1.svg',
    id: 'template1',
    description: '默认模板(适用于单页)',
  },
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/RGxVcJ2O3q/moban2.svg',
    id: 'template2',
    description: '简易模板',
  },
  {
    url: 'https://gw.alipayobjects.com/zos/antfincdn/Kn2jUKcBme/moban2.svg',
    id: 'template3',
    description: '简易模板(适用于多页)',
    disabled: false,
  },
];

export const TemplateSelector: React.FC = () => {
  const intl = useIntl();
  const query = getSearchObj();
  const currentTemplate = query.template || 'template1';

  const handleTemplateChange = (templateId: string) => {
    const {
      pathname,
      hash: currentHash,
      search: currentSearch,
    } = window.location;
    const hash = currentHash === '#/' ? '' : currentHash;
    const searchParams = new URLSearchParams(currentSearch.substring(1));
    searchParams.set('template', templateId);
    window.location.href = `${pathname}?${searchParams.toString()}${hash}`;
  };

  return (
    <div className="template-selector">
      <div className="template-selector-title">
        {intl.formatMessage({ id: '选择模板' })}
      </div>
      <div className="template-selector-grid">
        {TEMPLATES.map(item => {
          return (
            <div
              className={cx('template-selector-item', {
                selected: item.id === currentTemplate,
                disabled: item.disabled,
              })}
              key={`${item.id}`}
              onClick={() => !item.disabled && handleTemplateChange(item.id)}
            >
              <ReactSVG
                src={item.url}
                beforeInjection={svg => {
                  svg.setAttribute('class', 'template');
                }}
              />
              <span className="template-id">{item.id}</span>
              <span className="template-description">
                {intl.formatMessage({ id: item.description })}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
