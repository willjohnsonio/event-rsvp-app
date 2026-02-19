import {EmailTemplate } from '../../../componets/email-template';
import {Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);