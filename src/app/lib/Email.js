import nodemailer from 'nodemailer';
import emailConfig from '../../config/email';

export default nodemailer.createTransport(emailConfig);