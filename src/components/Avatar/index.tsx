import React, { useState } from 'react';
import { Upload, Avatar as AntdAvatar, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import './index.less';

interface AvatarProps {
  avatarSrc?: string;
  className?: string;
  shape?: string;
  size?: string;
  editable?: boolean;
  onUpload?: (base64: string) => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  avatarSrc,
  className,
  shape = 'circle',
  size = 'default',
  editable = false,
  onUpload,
}) => {
  const [loading, setLoading] = useState(false);

  const handleUpload = (file: File) => {
    // 验证文件类型
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('请上传图片文件');
      return false;
    }

    // 验证文件大小（限制为 5MB）
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error('图片大小不能超过 5MB');
      return false;
    }

    setLoading(true);
    const reader = new FileReader();
    reader.onload = e => {
      const base64 = e.target?.result as string;
      onUpload?.(base64);
      setLoading(false);
      message.success('头像上传成功');
    };
    reader.onerror = () => {
      setLoading(false);
      message.error('图片读取失败');
    };
    reader.readAsDataURL(file);
    return false;
  };

  return (
    <div className={`avatar ${!avatarSrc ? 'avatar-hidden' : ''}`}>
      {avatarSrc ? (
        <div className="avatar-wrapper">
          {/* @ts-ignore */}
          <AntdAvatar
            className={className}
            src={avatarSrc}
            shape={shape as any}
            size={size as any}
          />
          {editable && (
            <Upload
              beforeUpload={handleUpload}
              showUploadList={false}
              className="btn-upload"
            >
              <button className="upload-btn" type="button">
                <UploadOutlined />
              </button>
            </Upload>
          )}
        </div>
      ) : (
        <div className="avatar-empty">
          {editable ? (
            <Upload
              beforeUpload={handleUpload}
              showUploadList={false}
              className="btn-upload-empty"
            >
              <button className="upload-btn-empty" type="button">
                <UploadOutlined /> 上传头像
              </button>
            </Upload>
          ) : (
            <span className="avatar-upload-tip">头像地址为空</span>
          )}
        </div>
      )}
    </div>
  );
};
