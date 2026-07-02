import React from 'react';

type Opt = 'single' | 'multi' | undefined;

export function useTrackingQuery(opts?: { codeLen?: number; maxLines?: number }) {
  const codeLen = opts?.codeLen ?? 6;
  const maxLines = opts?.maxLines ?? 10;

  const [selectedOption, setSelectedOption] = React.useState<Opt>();
  const [singleValue, setSingleValue] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [multiErrorLines, setMultiErrorLines] = React.useState<number[]>([]);
  const [multiLines, setMultiLines] = React.useState<string[]>(['']);

  const handleMultiChange = React.useCallback((text: string, idx: number) => {
    const filtered = text.replace(/[^0-9]/g, '').slice(0, codeLen);
    setMultiLines(prev => {
      const arr = [...prev];
      arr[idx] = filtered;
      const cleaned = arr.filter(line => line.length > 0);
      return cleaned.length === 0 ? [''] : cleaned.slice(0, maxLines);
    });
  }, [codeLen, maxLines]);

  const handleAddLine = React.useCallback(() => {
    setMultiLines(prev => (prev.length < maxLines ? [...prev, ''] : prev));
  }, [maxLines]);

  const handleQueryPress = React.useCallback(() => {
    if (selectedOption === 'single' && singleValue.length !== codeLen) {
      setModalVisible(true);
      setMultiErrorLines([]);
      return;
    }
    if (selectedOption === 'multi') {
      const errorLines = multiLines
        .map((line, idx) => (line.length !== codeLen ? idx + 1 : null))
        .filter((v): v is number => v !== null);

      if (errorLines.length > 0) {
        setMultiErrorLines(errorLines);
        setModalVisible(true);
        return;
      }
    }
    // ...buraya sorgulama işlemi eklenebilir...
  }, [selectedOption, singleValue, multiLines, codeLen]);

  return {
    // state
    selectedOption, setSelectedOption,
    singleValue, setSingleValue,
    modalVisible, setModalVisible,
    multiErrorLines, setMultiErrorLines,
    multiLines, setMultiLines,

    // handlers
    handleMultiChange,
    handleAddLine,
    handleQueryPress,

    // sabitler
    codeLen,
    maxLines,
  };
}