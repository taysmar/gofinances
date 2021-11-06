import styled from 'styled-components/native';
import { Feather} from '@expo/vector-icons';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    padding: 17px 24px;
`;

export const Title = styled.Text``;

export const Amount = styled.Text``;

export const Footer = styled.View``;

export const Category = styled.View``;

export const Icon = styled(Feather)``;

export const CategoryName = styled.Text``;

export const Date = styled.Text``;