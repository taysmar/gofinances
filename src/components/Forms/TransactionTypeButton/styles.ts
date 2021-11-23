import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled(TouchableOpacity)`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;