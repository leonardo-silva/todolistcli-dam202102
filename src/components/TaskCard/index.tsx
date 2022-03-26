import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface TaskCardProps extends TouchableOpacityProps {
    title: string;
}

export function TaskCard({ title, ...rest }: TaskCardProps) {
    return (
        <TouchableOpacity 
            style={styles.buttonTask}
            {...rest}
        >
            <Text style={styles.textTask}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}