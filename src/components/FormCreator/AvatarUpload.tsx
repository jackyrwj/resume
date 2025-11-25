import React, { useState } from 'react';
import { Upload, Button, message, Space, Input } from 'antd';
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons';
import './AvatarUpload.less';

interface AvatarUploadProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const AvatarUpload: React.FC<AvatarUploadProps> = ({
  value,
  onChange,
}) => {
  const [preview, setPreview] = useState<string | undefined>(value);

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

    const reader = new FileReader();
    reader.onload = e => {
      const base64 = e.target?.result as string;
      setPreview(base64);
      onChange?.(base64);
      message.success('头像上传成功');
    };
    reader.onerror = () => {
      message.error('图片读取失败');
    };
    reader.readAsDataURL(file);
    return false;
  };

  const handleClear = () => {
    setPreview(undefined);
    onChange?.('');
    message.success('已清除头像');
  };

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setPreview(url);
    onChange?.(url);
  };

  return (
    <div className="avatar-upload-container">
      <Space direction="vertical" style={{ width: '100%' }}>
        {/* 预览 */}
        {preview && (
          <div className="avatar-preview">
            <img src={preview} alt="avatar preview" />
          </div>
        )}

        {/* 上传按钮 */}
        <Upload
          beforeUpload={handleUpload}
          showUploadList={false}
          accept="image/*"
        >
          <Button icon={<UploadOutlined />} block>
            上传图片
          </Button>
        </Upload>

        {/* URL 输入 */}
        <Input
          placeholder="或输入图片 URL"
          value={preview}
          onChange={handleUrlChange}
          allowClear
        />

        {/* 清除按钮 */}
        {preview && (
          <Button danger icon={<DeleteOutlined />} onClick={handleClear} block>
            清除头像
          </Button>
        )}
      </Space>
    </div>
  );
};
