import { View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';

import { styles } from './styles';
import { useEffect } from 'react';

interface Props {
  total: number;
  current: number;
}

export function ProgressBar({ total, current }: Props) {
  const percentage = Math.round((current / total) * 100);

  const sharedProgress = useSharedValue(percentage);

  useEffect(() => {

  }, [current]);

  return (
    <View style={styles.track}>
      <View style={[styles.progress, { width: `${percentage}%` }]} />
    </View>
  );
}