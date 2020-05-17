import React from 'react';
import { storiesOf } from '@storybook/react';
import HelloWorld from './hello-world';

storiesOf('HelloWorld', module)
    .add('Basic HelloWorld', () => (<HelloWorld />));

