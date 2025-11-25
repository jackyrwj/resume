import { FormattedMessage } from 'react-intl';
import React, { useEffect } from 'react';
import { ColorPicker } from '../../FormCreator/ColorPicker';
import type { ThemeConfig } from '../../types';

type Props = ThemeConfig & {
  onChange: (v: Partial<ThemeConfig>) => void;
};

const FormItemStyle = {
  display: 'flex',
  alignItems: 'center',
  minWidth: '100px',
};

export const ConfigTheme: React.FC<Props> = props => {
  useEffect(() => {
    let $style = document.getElementById('dynamic');
    if (!$style) {
      $style = document.createElement('style');
      $style.setAttribute('id', 'dynamic');
      document.head.insertBefore($style, null);
    }
    const styles = `
		  :root {
		    --primary-color: ${props.color};
		    --tag-color: ${props.tagColor};
		  }
		`;
    $style.innerHTML = styles;
  }, [props.color, props.tagColor]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <div style={FormItemStyle}>
        <span style={{ marginRight: '4px' }}>
          <FormattedMessage id="主题色" />
        </span>
        <ColorPicker
          value={props.color}
          onChange={v => props.onChange({ color: v })}
        />
      </div>
      <div style={FormItemStyle}>
        <span style={{ marginRight: '4px' }}>
          <FormattedMessage id="Tag 标签色" />
        </span>
        <ColorPicker
          value={props.tagColor}
          onChange={v => props.onChange({ tagColor: v })}
        />
      </div>
      <div
        style={{
          marginLeft: 16,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <span style={{ marginRight: 4 }}>
          <FormattedMessage id="预设主题" defaultMessage="Theme presets" />
        </span>
        {[
          {
            key: 'default',
            label: '蓝色 + 简洁',
            color: '#2f5785',
            tagColor: '#8bc34a',
          },
          {
            key: 'print',
            label: '黑白 · 适合打印',
            color: '#000000',
            tagColor: '#000000',
          },
          {
            key: 'card',
            label: '卡片式 + 阴影',
            color: '#3f51b5',
            tagColor: '#ff9800',
          },
        ].map(preset => (
          <span
            key={preset.key}
            onClick={() =>
              props.onChange({
                color: preset.color,
                tagColor: preset.tagColor,
              })
            }
            style={{
              padding: '2px 8px',
              marginRight: 4,
              marginTop: 4,
              borderRadius: 2,
              border: '1px solid #d9d9d9',
              cursor: 'pointer',
              fontSize: 12,
              backgroundColor:
                props.color === preset.color &&
                props.tagColor === preset.tagColor
                  ? 'rgba(0, 0, 0, 0.04)'
                  : '#fff',
            }}
          >
            {preset.label}
          </span>
        ))}
      </div>
    </div>
  );
};
