import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_2WmUMEPR_MLcNaucWGp6Tp3TH5fax4twS');

export const sendEmail = async () => await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'sanjay.subba@outside.studio',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
