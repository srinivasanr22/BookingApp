import { Colors } from '@/constants/Colors';
import * as React from 'react';
import { ActivityIndicator } from 'react-native-paper';

export type SpinnerProps = {
 showSpinner: boolean;
};

const Spinner: React.FC<SpinnerProps> = ({ showSpinner = false }) => {
  if (!showSpinner) {
    return null;
  }
  return <ActivityIndicator color={Colors.primaryColor}/>
};

export default Spinner;