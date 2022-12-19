import { message } from 'antd';

export const warning = (props) => message.warning({ content: props });
export const error = (props) => message.error({ content: props });
export const info = (props) => message.info({ content: props });
export const success = (props) => message.success({ content: props });
