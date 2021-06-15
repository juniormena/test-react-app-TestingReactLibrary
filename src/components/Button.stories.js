import Button  from './Button';
import { action } from '@storybook/addon-actions';

export default {
    component:Button,
    title:'Button'
};

export const Default = () => (
    <Button onClick={action('onClick')}/>
);
 