import React, { useState } from 'react';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';


import { Container, Header, Title, Form, Fields, TransactionTypes } from './styles';

export function Register() {

    const [transactionType, setTransectionType] = useState('');
    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransectionType(type);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>

            <Form>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />
                    <TransactionTypes>
                        <TransactionTypeButton
                            type="up"
                            title="Income"
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            type="down"
                            title="Outcome"
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}


                        />
                    </TransactionTypes>
                </Fields>
                <Button title="Enviar" />
            </Form>
        </Container>
    );
}