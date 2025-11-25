import React from 'react';
import { LangSwitcher } from '@/components/LangSwitcher';
import { getMode, useModeSwitcher } from '@/hooks/useModeSwitcher';
import { getSearchObj } from '@/helpers/location';
import { FormattedMessage } from 'react-intl';
import './header.less';

const Header: React.FC = () => {
  const mode = getMode();
  const [ModeSwitcher] = useModeSwitcher({});

  function gotoOnlineVersion() {
    const query = getSearchObj();
    if (typeof window !== 'undefined') {
      const { origin, pathname } = window.location;
      const search = query.user ? `?user=${query.user}` : '';
      window.open(`${origin}${pathname}${search}`);
    }
  }

  return (
    <header>
      <span className="brand">
        <span className="brand-title">Resume Generator</span>
        <span className="brand-subtitle">在线简历生成器</span>
      </span>
      <span>
        {ModeSwitcher}
        {mode === 'read' && (
          <span className={'action-link'} onClick={() => window.print()}>
            <FormattedMessage id="下载 PDF" />
          </span>
        )}
        <span className={'action-link'} onClick={gotoOnlineVersion}>
          在线版本
        </span>
        <LangSwitcher />
      </span>
    </header>
  );
};

export default Header;
