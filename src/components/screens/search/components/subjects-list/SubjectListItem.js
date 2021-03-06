// @flow

import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components';

const Container = styled(TouchableOpacity)`
  width: ${({ theme }) => theme.metrics.getWidthFromDP('44%')}px;
  height: ${({ theme }) => theme.metrics.getWidthFromDP('44%')}px;
  margin-bottom: ${({ theme }) => theme.metrics.mediumSize}px;
  margin-right: ${({ theme, index }) => (index % 2 !== 0 ? theme.metrics.largeSize : 0)}px;
  margin-left: ${({ theme, index }) => (index % 2 === 0 ? 0 : theme.metrics.largeSize)}px;
  border-radius: 4px;
`;

const SubjectImage = styled(FastImage).attrs(({ uri }) => ({
  source: { uri },
}))`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 4px;
`;

const DarkLayer = styled(View)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.darkLayer};
`;

const Title = styled(Text)`
  font-size: ${({ theme }) => theme.metrics.largeSize}px;
  font-family: CircularStd-Black;
  color: ${({ theme }) => theme.colors.white};
`;

type Props = {
  isTextInputFocused: boolean,
  onPress: Function,
  title: string,
  index: number,
};

const SubjectListItem = ({
  isTextInputFocused,
  onPress,
  title,
  index,
}: Props): Object => (
  <Container
    disabled={isTextInputFocused}
    onPress={onPress}
    index={index}
  >
    <SubjectImage
      uri="https://s3-sa-east-1.amazonaws.com/mind-cast/images/ragnar.jpeg"
    />
    <DarkLayer>
      <Title>{title}</Title>
    </DarkLayer>
  </Container>
);

export default SubjectListItem;
