import styled from 'styled-components';

export const SearchButton = styled.TouchableOpacity`
  min-width: 25%;
  border-left-width: 0.5px;
  margin-top: 8px;
  margin-bottom: 8px;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-color: ${(props) => props.theme.colors.primaryDarkColor};
`;

export const SearchButtonText = styled.Text`
  font-size: ${(props) => props.theme.sizes.subtitle2};
  color: ${(props) => props.theme.colors.primaryDarkColor};
`;

export const SearchFiltersNumber = styled.View`
  background: ${(props) => props.theme.colors.primaryDarkColor};
  padding-left: ${(props) => props.theme.space.space1};
  padding-right: ${(props) => props.theme.space.space1};
  border-radius: ${(props) => props.theme.borderRadius.tag};
  margin-right: 2px;
`;

export const SearchFiltersNumberText = styled.Text`
  font-size: ${(props) => props.theme.sizes.subtitle2};
  color: ${(props) => props.theme.colors.lightColor};
`;

export const Space = styled.View<{ width: string }>`
  width: ${(props) => props.theme.space[props.width]};
  height: 1px;
`;

export const Space2 = styled.View`
  width: 1px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const ContentLine = styled.View`
  flex-flow: row;
  flex: 1;
`;