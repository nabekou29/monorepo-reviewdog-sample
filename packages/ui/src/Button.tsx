import React from 'react';

export interface ButtonProps {
  /**
   * ボタンのテキスト
   */
  children: React.ReactNode;
  /**
   * クリック時のハンドラー
   */
  onClick?: () => void;
  /**
   * ボタンの種類
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * 無効状態
   */
  disabled?: boolean;
}

/**
 * 汎用ボタンコンポーネント
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  console.debug('Button rendered');

  // 実際のプロジェクトではスタイリングライブラリを使用するかもしれませんが、
  // ここではシンプルにするためにインラインスタイルを使用します
  const getStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.7 : 1,
    };

    switch (variant) {
      case 'primary':
        return {
          ...baseStyle,
          backgroundColor: '#0070f3',
          color: 'white',
        };
      case 'secondary':
        return {
          ...baseStyle,
          backgroundColor: '#f5f5f5',
          color: '#333',
        };
      case 'outline':
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          color: '#0070f3',
          border: '1px solid #0070f3',
        };
      default:
        return baseStyle;
    }
  };

  return (
    <button style={getStyle()} onClick={onClick} disabled={disabled} type="button">
      {children}
    </button>
  );
};
