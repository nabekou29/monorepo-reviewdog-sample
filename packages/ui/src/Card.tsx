import React from 'react';

export interface CardProps {
  /**
   * カードのコンテンツ
   */
  children: React.ReactNode;
  /**
   * カードのタイトル（オプション）
   */
  title?: string;
  /**
   * カードの幅（オプション）
   */
  width?: string | number;
  /**
   * クリック時のハンドラー（オプション）
   */
  onClick?: () => void;
}

/**
 * 汎用カードコンポーネント
 */
export const Card: React.FC<CardProps> = ({ children, title, width = '100%', onClick }) => {
  const cardStyle: React.CSSProperties = {
    width,
    border: '1px solid #eaeaea',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white',
    cursor: onClick ? 'pointer' : 'default',
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '12px',
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      {title && <div style={titleStyle}>{title}</div>}
      {children}
    </div>
  );
};
