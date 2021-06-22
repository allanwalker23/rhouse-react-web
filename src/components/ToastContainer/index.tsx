import React, { useCallback } from 'react';
import { Container } from './styles';
import {FiAlertCircle, FiXCircle} from 'react-icons/fi'
import { Interface } from 'readline';
import { ToastMessage, useToast } from '../../hooks/toast';
import Toast from './Toast';
import { useTransition } from 'react-spring';

interface ToastContainerProps{
    messages:ToastMessage[];
}
const ToastContainer: React.FC<ToastContainerProps> = ({messages}) =>{
    const messagesWithTransitions = useTransition(
        messages,
        message => message.id,
        {
          from: { right: '-120%', opacity: 0 },
          enter: { right: '0%', opacity: 1 },
          leave: { right: '-120%', opacity: 1 },
        },
      );

    return (
        <Container>
           {messagesWithTransitions.map(({item,key,props}) =>(
                <Toast key={key} style={props} message={item} />

           ))}
        </Container>
    )
}

export default ToastContainer;