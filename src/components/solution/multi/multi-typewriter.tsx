'use client';

import { useState, useEffect, useRef, useMemo } from 'react';

interface Word {
  letter: string;
  color: string;
  key: number;
}
interface WordList {
  word: string;
  letters: Word[];
}

export default function MultiTypewrite() {
  const wordsList = useMemo(() => {
    const list: WordList[] = [
      {
        word: 'Google',
        letters: [
          { letter: 'G', color: '#4285F4', key: 1 },
          { letter: 'o', color: '#EA4335', key: 2 },
          { letter: 'o', color: '#FBBC05', key: 3 },
          { letter: 'g', color: '#4285F4', key: 4 },
          { letter: 'l', color: '#34A853', key: 5 },
          { letter: 'e', color: '#EA4335', key: 6 },
        ],
      },
      {
        word: 'Amazon',
        letters: [
          { letter: 'A', color: '#FF9900', key: 7 },
          { letter: 'm', color: '#FF9900', key: 8 },
          { letter: 'a', color: '#FF9900', key: 9 },
          { letter: 'z', color: '#FF9900', key: 10 },
          { letter: 'o', color: '#FF9900', key: 11 },
          { letter: 'n', color: '#FF9900', key: 12 },
        ],
      },
      {
        word: 'TikTok',
        letters: [
          { letter: 'T', color: '#FE2C55', key: 13 },
          { letter: 'i', color: '#FE2C55', key: 14 },
          { letter: 'k', color: '#FE2C55', key: 15 },
          { letter: 'T', color: '#FE2C55', key: 16 },
          { letter: 'o', color: '#FE2C55', key: 17 },
          { letter: 'k', color: '#FE2C55', key: 18 },
        ],
      },
      {
        word: 'Facebook',
        letters: [
          { letter: 'F', color: '#1877F2', key: 19 },
          { letter: 'a', color: '#1877F2', key: 20 },
          { letter: 'c', color: '#1877F2', key: 21 },
          { letter: 'e', color: '#1877F2', key: 22 },
          { letter: 'b', color: '#1877F2', key: 23 },
          { letter: 'o', color: '#1877F2', key: 24 },
          { letter: 'o', color: '#1877F2', key: 25 },
          { letter: 'k', color: '#1877F2', key: 26 },
        ],
      },
      {
        word: 'eBay',
        letters: [
          { letter: 'e', color: '#E43137', key: 27 },
          { letter: 'B', color: '#0063D1', key: 28 },
          { letter: 'a', color: '#F4AE01', key: 29 },
          { letter: 'y', color: '#85B716', key: 30 },
        ],
      },
      {
        word: 'Instagram',
        letters: [
          { letter: 'I', color: '#FFD622', key: 31 },
          { letter: 'n', color: '#FD9C19', key: 32 },
          { letter: 's', color: '#FB7913', key: 33 },
          { letter: 't', color: '#F71A05', key: 34 },
          { letter: 'a', color: '#F71C05', key: 35 },
          { letter: 'g', color: '#EC011D', key: 36 },
          { letter: 'r', color: '#D7015C', key: 37 },
          { letter: 'a', color: '#BA01B5', key: 38 },
          { letter: 'm', color: '#BA01B5', key: 39 },
        ],
      },
      {
        word: 'x',
        letters: [{ letter: 'X', color: '#1E1F24', key: 40 }],
      },
    ];
    return list;
  }, []);
  let wordIndex = useRef<number>(0);
  let letterIndex = useRef<number>(0);
  let stayCount = useRef<number>(0);
  const [target, setTarget] = useState<Word[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (letterIndex.current >= wordsList[wordIndex.current].letters.length) {
        stayCount.current++;
        if (stayCount.current >= 7) {
          wordIndex.current++;
          letterIndex.current = 0;
          stayCount.current = 0;
          if (wordIndex.current === 7) {
            wordIndex.current = 0;
          }
          setTarget([]);
        }
        return;
      }

      const t = wordsList[wordIndex.current].letters[letterIndex.current];
      setTarget(target.concat(t));
      letterIndex.current++;
    }, 100);

    return () => clearInterval(timer);
  }, [target, setTarget, wordsList]);

  const WriteWord = ({ letter, color }: { letter: string; color: string }) => {
    return <span style={{ color }}>{letter}</span>;
  };

  return (
    <span className="inline-block ipad:w-[205px] iph:w-[154px] w-[128px] text-left">
      {target.map(t => {
        return <WriteWord key={t.key} letter={t.letter} color={t.color} />;
      })}
      _
    </span>
  );
}
