import { memo } from 'react';
import { FlashList, FlashListProps } from '@shopify/flash-list';
import Animated from 'react-native-reanimated';
import { SCROLLABLE_TYPE } from '../../constants';
import { createBottomSheetScrollableComponent } from './createBottomSheetScrollableComponent';
import type {
  BottomSheetFlatListMethods,
  BottomSheetFlatListProps,
} from './types';

const AnimatedFlashList =
  Animated.createAnimatedComponent<FlashListProps<any>>(FlashList);

const BottomSheetFlashListComponent = createBottomSheetScrollableComponent<
  BottomSheetFlatListMethods,
  BottomSheetFlatListProps<any>
>(SCROLLABLE_TYPE.FlashList, AnimatedFlashList);

const BottomSheetFlashList = memo(BottomSheetFlashListComponent);
BottomSheetFlashList.displayName = 'BottomSheetFlashList';

export default BottomSheetFlashList as <T>(
  props: BottomSheetFlatListProps<T>
) => ReturnType<typeof BottomSheetFlashList>;
